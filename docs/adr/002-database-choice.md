

# ADR 002 — Database Choice: Neon vs Supabase

## Status

Accepted

## Context

Our Next.js Dashboard needs a reliable database to store users, customers, invoices, and revenue information.

We use PostgreSQL and connect to the database through the `postgres` library in `app/lib/data.ts`.

We considered Neon and Supabase because both offer hosted PostgreSQL databases.

## Options Considered

### Option 1: Neon

- Provides managed PostgreSQL hosting.

- Supports serverless applications.

- Offers database branching for development and testing.

- Works with the `postgres` library.

### Option 2: Supabase

- Provides managed PostgreSQL hosting.

- Includes additional services such as authentication, storage, and APIs.

- Can be useful for applications needing an integrated backend platform.

## Decision

We use Neon PostgreSQL for our Next.js Dashboard.

Neon is suitable because our application needs PostgreSQL database hosting, while Next.js handles application logic and NextAuth handles authentication.

Our database connection is configured through the `POSTGRES_URL` environment variable.

## Consequences

### Positive

- Managed PostgreSQL database.

- No need to maintain our own database server.

- Compatible with our existing Next.js application.

- Supports separate databases or branches for different environments.

### Negative

- Depends on an external database provider.

- Requires secure management of database credentials.

- Database availability depends on the hosting service.

- Database migrations and backups must be planned and maintained.