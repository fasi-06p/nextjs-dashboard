

# ADR 001 — Next.js App Router

## Status

Accepted

## Context

Our Dashboard application needs a framework for building pages, handling user interactions, and accessing data securely.

We are using Next.js with React and TypeScript. We need a structure that supports both server-side and client-side functionality.

## Options Considered

1. **Next.js App Router**

   - Uses the `app/` directory.

   - Supports Server Components and Server Actions.

   - Provides file-based routing.

2. **Next.js Pages Router**

   - Uses the `pages/` directory.

   - Supports traditional page routing and API routes.

   - Has a different data-fetching model.

## Decision

We chose Next.js App Router because our application already uses the `app/` directory and benefits from Server Components, Server Actions, and file-based routing.

## Consequences

### Positive

- Clear organization of pages and layouts.

- Server-side data fetching.

- Less client-side JavaScript for server-rendered content.

- Built-in support for server-side operations.

### Negative

- Requires learning the difference between Server and Client Components.

- Some features require careful handling of server-side and client-side code.

- Framework updates may require code changes.