

# Test Plan — Next.js Dashboard

## 1. Scope

This test plan covers the Next.js Dashboard application,

including invoice management, customer management,

authentication, navigation, and form validation.

## 2. Test Levels

| Level | What we test | Tool |

|---|---|---|

| Unit | Currency, dates, pagination | Vitest |

| Validation | Invoice and customer schemas | Vitest |

| Integration/API | Database operations and API responses | Vitest |

| End-to-end | Login, invoices, customers, navigation | Playwright |

| Manual | Usability, responsive layout, accessibility | Browser testing |

## 3. Out of Scope

- Testing the internal code of third-party libraries

- Load testing with thousands of concurrent users

- Testing external authentication providers themselves

## 4. Test Environments

- Local: Developer's computer

- Test: Separate Neon database branch, to be configured

- Preview: Vercel preview deployment

- Production: Live Vercel application

Automated database tests must never connect to production.

## 5. Entry Criteria

- Requirements and acceptance criteria are documented

- Required test environment is available

- Test data is prepared

- Application dependencies are installed

## 6. Exit Criteria

- All required tests pass

- No unresolved critical defects

- No accidental production database access

- Test results are documented

## 7. Risks

- Database tests could modify production data if configured incorrectly

- Authentication may require special test accounts

- External services may be temporarily unavailable

- Browser tests may behave differently across environments

## 8. Roles

- Developer: Implements features and automated tests

- Reviewer: Reviews code and test coverage

- Tester: Executes tests and reports defects

- Teacher/customer: Confirms acceptance criteria

## 9. Current Test Results

- Test framework: Vitest 5.1.0

- Unit and validation tests: 23 passing

- Failed tests: 0

- Database integration tests: Not yet implemented

- End-to-end tests: Not yet implemented

- Coverage percentage: Not yet measured

## 10. Test Execution

Run all current automated tests:

`pnpm test`

Run the TypeScript check:

`pnpm exec tsc --noEmit`

Future database tests will use a dedicated test environment.