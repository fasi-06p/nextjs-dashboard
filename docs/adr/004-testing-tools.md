

# ADR 004 — Testing Tools

**Status:** Accepted

**Date:** 2026-11-09

## Context

The Next.js Dashboard application needs automated testing

to ensure that features work correctly and changes do not

introduce new bugs.

The project requires unit tests, validation tests,

integration tests, and end-to-end browser tests.

We need testing tools that work well with Next.js,

TypeScript, and GitHub Actions.

## Options Considered

### Unit Testing: Vitest vs Jest

**Vitest**

- Fast test execution

- Supports TypeScript

- Simple configuration

- Works with modern JavaScript projects

**Jest**

- Popular and widely used

- Large ecosystem

- Good documentation

- May require additional configuration

### End-to-End Testing: Playwright vs Cypress

**Playwright**

- Supports Chromium, Firefox, and WebKit

- Supports automated browser testing

- Provides screenshots and traces

- Works with GitHub Actions

**Cypress**

- Interactive debugging tools

- Good developer experience

- Widely used for web testing

## Decision

We choose:

1. **Vitest** for unit and validation testing.

2. **Playwright** for end-to-end browser testing.

3. **Zod** for validating invoice and customer input.

4. **Neon PostgreSQL test branch** for database integration testing.

Vitest has already been installed and 23 tests are passing.

Playwright and the separate Neon test database are

planned but not yet configured.

## Consequences

### Positive

- Automated tests can catch errors early.

- Developers can run tests before opening pull requests.

- Browser tests can verify real user workflows.

- A separate database reduces the risk of modifying

  production data.

### Negative

- Tests require maintenance as the application changes.

- Browser tests take longer than unit tests.

- A separate test database requires configuration.

- CI testing increases build time.

## Verification

Current test command:

`pnpm test`

Current result:

- 23 tests passed

- 0 tests failed

Future work:

- Configure an isolated Neon test database.

- Add database integration tests.

- Install Playwright in S7.

- Run automated tests in GitHub Actions in S5.