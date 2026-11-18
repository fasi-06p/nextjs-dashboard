
import { describe, expect, it } from 'vitest';
import { CreateInvoice, UpdateInvoice, CustomerSchema } from './schemas';

const validInvoice = {
  customerId: 'customer-123',
  amount: '25',
  status: 'pending',
};

const validCustomer = {
  name: 'Test Customer',
  email: 'test@example.com',
  image_url: '/customers/amy-burns.png',
};

describe('Invoice validation', () => {
  it('accepts a valid invoice', () => {
    expect(CreateInvoice.safeParse(validInvoice).success).toBe(true);
  });

  it('accepts a valid invoice update', () => {
    expect(UpdateInvoice.safeParse(validInvoice).success).toBe(true);
  });

  it.each([
    ['zero amount', { amount: '0' }, 'amount'],
    ['negative amount', { amount: '-5' }, 'amount'],
    ['non-numeric amount', { amount: 'abc' }, 'amount'],
    ['invalid status', { status: 'unknown' }, 'status'],
    ['missing customer', { customerId: null }, 'customerId'],
  ])('rejects %s', (_description, changes, field) => {
    const result = CreateInvoice.safeParse({
      ...validInvoice,
      ...changes,
    });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.flatten().fieldErrors).toHaveProperty(field);
    }
  });
});

describe('Customer validation', () => {
  it('accepts valid customer information', () => {
    expect(CustomerSchema.safeParse(validCustomer).success).toBe(true);
  });

  it.each([
    ['empty name', { name: '' }, 'name'],
    ['invalid email', { email: 'not-an-email' }, 'email'],
    ['invalid avatar', { image_url: '/invalid.png' }, 'image_url'],
  ])('rejects %s', (_description, changes, field) => {
    const result = CustomerSchema.safeParse({
      ...validCustomer,
      ...changes,
    });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.flatten().fieldErrors).toHaveProperty(field);
    }
  });
});
