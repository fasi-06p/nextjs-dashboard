# Next.js Dashboard

A full-stack dashboard application built as part of the [Next.js App Router Course](https://nextjs.org/learn) and extended with customer management features.

## About the Project

This application helps users manage customers and invoices through a simple dashboard interface.

It demonstrates modern web development concepts, including server-side data fetching, authentication, database operations, form validation, and dynamic routing.

## Features

- User login and protected dashboard pages
- Dashboard overview with business statistics
- View, search, create, edit, and delete invoices
- View, search, create, edit, and delete customers
- Customer detail pages showing related invoices
- URL-based search and pagination
- Form validation and accessible error messages
- Loading skeletons and error handling
- Responsive interface for desktop and mobile

## Live Application

Deployment URL:

https://nextjs-dashboard-fasi-06ps-projects.vercel.app

Note: Deployment availability and functionality should be verified before use.

## Technology Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- PostgreSQL (Neon)
- NextAuth.js for authentication
- Zod for form validation
- Vercel for deployment
- Git and GitHub for version control

## Running Locally

### Prerequisites

Install Node.js and pnpm. You will also need access to a configured PostgreSQL database.

### 1. Clone the repository

```bash
git clone https://github.com/fasi-06p/nextjs-dashboard.git
cd nextjs-dashboard
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the required database connection and authentication secret.

Never commit passwords, database connection strings, or other secrets to GitHub.

### 4. Start the development server

```bash
pnpm dev
```

### 5. Open the application

Visit:

http://localhost:3000

Log in with an account configured in the application's database.

## Project Structure

- `app/dashboard/` — Dashboard pages and routes
- `app/dashboard/customers/` — Customer management pages
- `app/dashboard/invoices/` — Invoice management pages
- `app/ui/` — Reusable interface components
- `app/lib/data.ts` — Database queries
- `app/lib/actions.ts` — Server Actions for creating, updating, and deleting records
- `public/` — Static assets

## Development Workflow

Development changes are made on separate Git branches and submitted through pull requests.

Pull requests require review before merging into the protected `main` branch.

See `CONTRIBUTING.md` for contribution guidelines once that file has been merged.

## Learning Background

This project is based on the official Next.js Learn dashboard tutorial and extended through additional student programming assignments.

## Author

Fasika Tilahun

ICT Student — Finland
