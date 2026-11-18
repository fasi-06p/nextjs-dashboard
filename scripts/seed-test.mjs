
import fs from 'node:fs';
import postgres from 'postgres';
import bcrypt from 'bcryptjs';

const testEnv = fs.readFileSync('.env.test.local', 'utf8');
const prodEnv = fs.readFileSync('.env', 'utf8');

function getUrl(text) {
  const match = text.match(/^POSTGRES_URL=["']?(.+?)["']?\s*$/m);
  return match?.[1];
}

const testUrl = getUrl(testEnv);
const prodUrl = getUrl(prodEnv);

if (!testUrl || !prodUrl) {
  throw new Error('Missing test or production database URL.');
}

if (!/^APP_ENV=["']?test["']?\s*$/m.test(testEnv)) {
  throw new Error('APP_ENV must be test.');
}

const testHost = new URL(testUrl).hostname;
const prodHost = new URL(prodUrl).hostname;

if (testHost === prodHost) {
  throw new Error('Test database host matches production. Aborting.');
}

if (process.env.CONFIRM_TEST_BRANCH !== 'testing-s4') {
  throw new Error(
    'Set CONFIRM_TEST_BRANCH=testing-s4 before running.'
  );
}

const sql = postgres(testUrl, {
  ssl: 'require',
  max: 1,
});

const passwordHash = await bcrypt.hash('TestPassword123!', 10);

try {
  await sql.begin(async (tx) => {
    await tx`DELETE FROM invoices`;
    await tx`DELETE FROM customers`;
    await tx`DELETE FROM revenue`;
    await tx`DELETE FROM users`;

    await tx`
      INSERT INTO users (name, email, password)
      VALUES (
        'S4 Test User',
        's4-test@example.com',
        ${passwordHash}
      )
    `;

    await tx`
      INSERT INTO customers (name, email, image_url)
      VALUES (
        'S4 Test Customer',
        's4-customer@example.com',
        '/customers/amy-burns.png'
      )
    `;

    const customers = await tx`
      SELECT id FROM customers
      WHERE email = 's4-customer@example.com'
    `;

    await tx`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (
        ${customers[0].id},
        2500,
        'pending',
        '2026-11-09'
      )
    `;

    await tx`
      INSERT INTO revenue (month, revenue)
      VALUES ('Nov', 2500)
    `;
  });

  console.log('Test database seeded successfully!');
} catch (error) {
  console.error('Test seeding failed:', error.message);
  process.exitCode = 1;
} finally {
  await sql.end();
}
