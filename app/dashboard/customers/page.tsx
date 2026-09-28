import CustomersTable from '@/app/ui/customers/table';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/invoices/pagination';
import { fetchCustomersPages } from '@/app/lib/data';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>

      <div className="mt-4">
        <Search placeholder="Search customers..." />
      </div>

      <Suspense
        key={query + currentPage}
        fallback={<CustomersTableSkeleton />}
      >
        <CustomersTable
          query={query}
          currentPage={currentPage}
        />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}