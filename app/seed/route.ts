
import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import {
  invoices,
  customers,
  revenue,
  users,
} from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: 'require',
});

// Database tables are created through SQL migration files
// in supabase/migrations/, not by this seed route.

async function seedUsers() {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await sql`
      INSERT INTO users (id, name, email, password)
      VALUES (
        ${user.id},
        ${user.name},
        ${user.email},
        ${hashedPassword}
      )
      ON CONFLICT (id) DO NOTHING;
    `;
  }
}

async function seedCustomers() {
  for (const customer of customers) {
    await sql`
      INSERT INTO customers (id, name, email, image_url)
      VALUES (
        ${customer.id},
        ${customer.name},
        ${customer.email},
        ${customer.image_url}
      )
      ON CONFLICT (id) DO NOTHING;
    `;
  }
}

async function seedInvoices() {
  for (const invoice of invoices) {
    // Avoid duplicate sample invoices when seeding again.
    const existing = await sql`
      SELECT id
      FROM invoices
      WHERE customer_id = ${invoice.customer_id}
        AND amount = ${invoice.amount}
        AND status = ${invoice.status}
        AND date = ${invoice.date}
      LIMIT 1;
    `;

    if (existing.length === 0) {
      await sql`
        INSERT INTO invoices (
          customer_id,
          amount,
          status,
          date
        )
        VALUES (
          ${invoice.customer_id},
          ${invoice.amount},
          ${invoice.status},
          ${invoice.date}
        );
      `;
    }
  }
}

async function seedRevenue() {
  for (const rev of revenue) {
    await sql`
      INSERT INTO revenue (month, revenue)
      VALUES (${rev.month}, ${rev.revenue})
      ON CONFLICT (month) DO NOTHING;
    `;
  }
}

// Only allow seeding in development with a valid secret.
export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return Response.json(
      { error: 'Seeding is disabled outside development.' },
      { status: 403 },
    );
  }

  const configuredSecret = process.env.SEED_SECRET;

  if (!configuredSecret) {
    return Response.json(
      { error: 'SEED_SECRET is not configured.' },
      { status: 403 },
    );
  }

  const providedSecret = request.headers.get('x-seed-secret');

  if (providedSecret !== configuredSecret) {
    return Response.json(
      { error: 'Unauthorized.' },
      { status: 401 },
    );
  }

  try {
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedRevenue();

    return Response.json({
      message: 'Development database seeded successfully.',
    });
  } catch (error) {
    console.error('Database seeding failed.');

    return Response.json(
      { error: 'Database seeding failed.' },
      { status: 500 },
    );
  }
}
