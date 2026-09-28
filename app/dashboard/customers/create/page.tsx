import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Customer',
};

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Customers',
            href: '/dashboard/customers',
          },
          {
            label: 'Create Customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />

      <div className="rounded-md bg-gray-50 p-6">
        <h1 className="text-xl font-semibold">Create Customer</h1>
        <p className="mt-2 text-sm text-gray-500">
          Add a new customer to the dashboard.
        </p>
      </div>
    </main>
  );
}