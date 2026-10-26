# Contributing to Next.js Dashboard

## Purpose
This document explains how we work together on the Next.js Dashboard project.

## 1. Branch Naming
Always create a new branch from `main` before starting work.

Examples:
- `feat/t4-3-vitest` — New features
- `fix/login-error` — Bug fixes
- `docs/t1-5-contributing` — Documentation
- `test/invoice-validation` — Tests

Do not push changes directly to `main`.

## 2. Commit Messages
Use short, clear commit messages describing what changed.

Examples:
- `Add pull request template`
- `Fix customer validation`
- `Update project documentation`

Commit changes in small steps.

## 3. GitHub Issues
Before starting a task:
1. Create a GitHub issue with the task ID.
2. Describe the work and acceptance criteria.
3. Estimate the time required.
4. Add the issue to the project board.

Record actual hours when the task is finished.

## 4. Pull Requests and Reviews
1. Open a pull request from your task branch into `main`.
2. Include `Closes #<issue-number>` in the description.
3. Complete the pull request template.
4. Request a review from your partner.
5. Address review comments.
6. Wait for required CI checks to pass.
7. Squash merge after approval.

Never merge your own pull request without a review.

## 5. Definition of Ready
A task is ready to start when:
- The goal and user value are clear.
- Acceptance criteria are testable.
- Dependencies are identified.
- An estimate is provided.
- The testing approach is understood.
- A reviewer is assigned.

## 6. Definition of Done
A task is done when:
- The acceptance criteria are met.
- The changes have been tested.
- Code and documentation are updated.
- No secrets are committed.
- A partner has reviewed and approved the PR.
- Required CI checks pass.
- Changes are merged into `main`.
- The issue records actual hours and is closed.

## 7. Sprint Routine
During each sprint:
- Post stand-up updates twice a week: Done / Next / Blocked.
- Demonstrate completed work at the sprint review.
- Add a retrospective entry to `docs/retro.md`.
- Write a TIL note in `docs/til/` after solving a problem that blocked progress for more than 30 minutes.

## 8. Security
Never commit passwords, API keys, database credentials, or `.env` files containing secrets.
