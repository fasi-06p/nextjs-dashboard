

# ADR 003 — Authentication: NextAuth vs Supabase Auth

## Status

Accepted

## Context

Our Next.js Dashboard needs authentication to protect dashboard pages and allow authorized users to sign in.

The application uses Next.js App Router and a Neon PostgreSQL database.

We need an authentication solution that works with our existing application.

## Options Considered

### Option 1: NextAuth (Auth.js)

- Integrates with Next.js.

- Supports credentials and other sign-in providers.

- Provides session management.

- Can work with our existing Neon database.

### Option 2: Supabase Auth

- Provides managed authentication services.

- Supports email, password, and social sign-in methods.

- Integrates closely with the Supabase platform.

- Would require additional integration with our current application.

## Decision

We chose NextAuth (Auth.js).

Our application already includes the `next-auth` package and authentication configuration files.

NextAuth allows us to manage authentication within our Next.js application without moving our database from Neon to Supabase.

## Consequences

### Positive

- Integrates with our existing Next.js project.

- Supports protected routes and user sessions.

- Avoids introducing another backend service for authentication.

- Works alongside our existing PostgreSQL database.

### Negative

- Authentication configuration must be maintained by the development team.

- Security updates must be monitored.

- The project currently uses a beta version of NextAuth, which may introduce changes in future updates.