import * as z from 'zod';

export const RegisterSchema = z.object({
    companyName: z.string().trim().min(1, { message: 'Required' }),
    industry: z.string().trim().min(1, { message: 'Required' }),
    companySize: z.string().trim().min(1, { message: 'Required' }),
    streetAddress: z.string().trim().min(1, { message: 'Required' }),
    city: z.string().trim().min(1, { message: 'Required' }),
    stateOrProvince: z.string().trim().min(1, { message: 'Required' }),
    postalCode: z.string().trim().min(1, { message: 'Required' }),
    country: z.string().trim().min(1, { message: 'Required' }),
    phoneNumber: z.string().trim().min(1, { message: 'Required' }),
    emailAddress: z.string().trim().min(1, { message: 'Required' }),


})