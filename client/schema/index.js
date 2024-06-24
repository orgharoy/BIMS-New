import * as z from 'zod';

export const RegisterSchema = z.object({
    companyName: z.string().trim().min(1, { message: 'Enter a company name' }),
    industry: z.string().trim().min(1, { message: 'Select an industry' }),
    companySize: z.string().trim().min(1, { message: 'Select a company size' }),
    streetAddress: z.string().trim().min(1, { message: 'Enter street address' }),
    city: z.string().trim().min(1, { message: 'Enter city' }),
    stateOrProvince: z.string().trim().min(1, { message: 'Enter state/province' }),
    postalCode: z.string().trim().min(1, { message: 'Enter postal code' }),
    country: z.string().trim().min(1, { message: 'Select a country' }),
    phoneNumber: z.string().trim().min(1, { message: 'Enter a phone number' }),
    emailAddress: z.string().trim().min(1, { message: 'Enter a valid email address' }),


})