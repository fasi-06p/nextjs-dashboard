
## CI Secrets and Environment Variables

GitHub Actions runs lint, TypeScript checks, Vitest coverage and the Next.js production build.

- POSTGRES_URL: PostgreSQL connection string. Store privately in GitHub Actions secrets if a CI job needs database access.
- AUTH_SECRET: Authentication secret, if required by the application's build or tests.
- APP_ENV: Set to test when running database integration tests.
- Test database: Use the isolated Neon testing-s4 branch, never the production database.

Secrets must never be committed to Git. Local .env files remain ignored.

For the current CI workflow, no repository secrets have been configured or confirmed as necessary. Any future database integration tests must use dedicated test credentials.
