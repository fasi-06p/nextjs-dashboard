
import { z } from 'zod';

export const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

export const CreateInvoice = FormSchema.omit({
  id: true,
  date: true,
});

export const UpdateInvoice = FormSchema.omit({
  id: true,
  date: true,
});

export const allowedAvatars = [
  '/customers/amy-burns.png',
  '/customers/balazs-orban.png',
  '/customers/delba-de-oliveira.png',
  '/customers/evil-rabbit.png',
  '/customers/lee-robinson.png',
  '/customers/michael-novotny.png',
] as const;

export const CustomerSchema = z.object({
  name: z.string().trim().min(1, {
    message: 'Please enter a customer name.',
  }),
  email: z.string().trim().email({
    message: 'Please enter a valid email address.',
  }),
  image_url: z.enum(allowedAvatars, {
    message: 'Please select an avatar.',
  }),
});
