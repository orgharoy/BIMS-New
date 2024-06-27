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

    contactPersonFirstName: z.string().trim().min(1, { message: 'Required' }),
    contactPersonLastName: z.string().trim().min(1, { message: 'Required' }),
    contactPersonPhoneNumber: z.string().trim().min(1, { message: 'Required' }),
    contactPersonEmailAddress: z.string().trim().min(1, { message: 'Required' }),
    contactPersonDesignation: z.string().trim().min(1, { message: 'Required' }),

    accountInformationFirstName: z.string().trim().min(1, { message: 'Required' }),
    accountInformationLastName: z.string().trim().min(1, { message: 'Required' }),
    accountInformationPhoneNumber: z.string().trim().min(1, { message: 'Required' }),
    accountInformationAddress: z.string().trim().min(1, { message: 'Required' }),
    accountInformationDesignation: z.string().trim().min(1, { message: 'Required' }),
    accountInformationPassword: z.string().trim().min(1, { message: 'Required' }),
    accountInformationPasswordConfirm: z.string().trim().min(1, { message: 'Required' }),

    subscriptionPlan: z.string().trim().min(1, { message: 'Required' }),


})