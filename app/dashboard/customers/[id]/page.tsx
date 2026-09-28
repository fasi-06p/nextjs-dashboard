import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  fetchCustomerById,
  fetchCustomerInvoices,
} from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import InvoiceStatus from '@/app/ui/invoices/status';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function Page(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const customer = await fetchCustomerById(id);

  if (!customer) {
    notFound();
  }

  const invoices = await fetchCustomerInvoices(id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: customer.name,
            href: `/dashboard/customers/${id}`,
            active: true,
          },
        ]}
      />

      <div className="mb-6 rounded-md bg-gray-50 p-6">
        <div className="flex items-center gap-4">
          <Image
            src={customer.image_url}
            alt={`${customer.name}'s profile picture`}
            width={64}
            height={64}
            className="rounded-full"
          />

          <div>
            <h1 className={`${lusitana.className} text-2xl`}>
              {customer.name}
            </h1>
            <p className="text-sm text-gray-500">{customer.email}</p>
          </div>
        </div>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-md bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Total Invoices</p>
          <p className="text-2xl font-semibold">
            {customer.total_invoices}
          </p>
        </div>

        <div className="rounded-md bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Total Pending</p>
          <p className="text-2xl font-semibold">
            {customer.total_pending}
          </p>
        </div>

        <div className="rounded-md bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Total Paid</p>
          <p className="text-2xl font-semibold">
            {customer.total_paid}
          </p>
        </div>
      </div>

      <h2 className={`${lusitana.className} mb-4 text-xl`}>
        Invoices
      </h2>

      {invoices.length === 0 ? (
        <div className="rounded-md bg-gray-50 p-6 text-center">
          <p className="text-gray-500">
            This customer has no invoices.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-md bg-gray-50 p-2">
          <table className="min-w-full text-gray-900">
            <thead className="text-left text-sm font-normal">
              <tr>
                <th className="px-4 py-5 font-medium">Date</th>
                <th className="px-4 py-5 font-medium">Amount</th>
                <th className="px-4 py-5 font-medium">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="bg-white px-4 py-5 text-sm">
                    {formatDateToLocal(invoice.date)}
                  </td>

                  <td className="bg-white px-4 py-5 text-sm">
                    {formatCurrency(invoice.amount)}
                  </td>

                  <td className="bg-white px-4 py-5 text-sm">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}