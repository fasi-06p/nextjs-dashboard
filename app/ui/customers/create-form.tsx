'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useActionState } from 'react';
import {
  createCustomer,
  CustomerState,
} from '@/app/lib/actions';

const avatars = [
  '/customers/amy-burns.png',
  '/customers/balazs-orban.png',
  '/customers/delba-de-oliveira.png',
  '/customers/evil-rabbit.png',
  '/customers/lee-robinson.png',
  '/customers/michael-novotny.png',
];

export default function CreateCustomerForm() {
  const initialState: CustomerState = {
    message: null,
    errors: {},
    values: {},
  };

  const [state, formAction] = useActionState(
    createCustomer,
    initialState,
  );

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium"
          >
            Customer name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter customer name"
            defaultValue={state.values?.name || ''}
            aria-describedby="name-error"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
          />

          <div
            id="name-error"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.errors?.name?.map((error) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter customer email"
            defaultValue={state.values?.email || ''}
            aria-describedby="email-error"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
          />

          <div
            id="email-error"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.errors?.email?.map((error) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
          </div>
        </div>

        <fieldset aria-describedby="image-error">
          <legend className="mb-2 block text-sm font-medium">
            Choose an avatar
          </legend>

          <div className="flex flex-wrap gap-4">
            {avatars.map((avatar) => (
              <label
                key={avatar}
                className="cursor-pointer rounded-md border bg-white p-2"
              >
                <input
                  type="radio"
                  name="image_url"
                  value={avatar}
                  defaultChecked={
                    state.values?.image_url === avatar
                  }
                  className="mr-2"
                />

                <Image
                  src={avatar}
                  alt="Customer avatar"
                  width={40}
                  height={40}
                  className="inline-block rounded-full"
                />
              </label>
            ))}
          </div>

          <div
            id="image-error"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.errors?.image_url?.map((error) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
          </div>
        </fieldset>

        <div aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="mt-4 text-sm text-red-500">
              {state.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 hover:bg-gray-200"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-500"
        >
          Create Customer
        </button>
      </div>
    </form>
  );
}