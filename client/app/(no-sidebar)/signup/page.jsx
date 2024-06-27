"use client"

import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/schema';
import { cn } from '@/lib/utils';

const page = () => {
    const [pageNum, setPageNum] = React.useState(1);
    const industries = ["Agriculture", "Automotive", "Banking & Financial Services", "Biotechnology", "Construction", "Consumer Goods",  "Education",  "Energy",  "Entertainment & Media",  "Environmental Services", "Food & Beverage", "Government", "Healthcare", "Hospitality", "Information Technology", "Insurance", "Manufacturing", "Mining", "Non-Profit", "Pharmaceuticals", "Real Estate", "Retail", "Telecommunications", "Transportation & Logistics", "Travel & Tourism"];
    const companySizes = ["Small", "Medium", "Large"];
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda"]; 
    const designations = ["Administration", "Finance", "Marketing", "Sales", "Human Resources", "Information Technology", "Customer Service", "Operations",  "Legal", "Research and Development", "Quality Assurance", "Product Management", "Procurement", "Supply Chain Management",  "Logistics", "Training and Development", "Compliance", "Public Relations", "Engineering", "Design",  "Business Development", "Facilities Management", "Security", "Corporate Strategy", "Investor Relations"];

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            companyName: '',
            industry: '',
            companySize: '',
            streetAddress: '',
            city: '',
            stateOrProvince: '',
            postalCode: '',
            country: '',
            phoneNumber: '',
            emailAddress: '',
            contactPersonFirstName: '',
            contactPersonLastName: '',
            contactPersonPhoneNumber: '',
            contactPersonEmailAddress: '',
            contactPersonDesignation: '',
            accountInformationFirstName: '',
            accountInformationLastName: '',
            accountInformationPhoneNumber: '',
            accountInformationAddress: '',
            accountInformationDesignation: '',
            accountInformationPassword: '',
            accountInformationPasswordConfirm: '',
            subscriptionPlan: '',
        }
    })

    function onSubmit(values) {
        console.log("clicked")
        console.log(values);
    }

    function handlePrevious() {
        setPageNum((prevPageNum) => pageNum === 1 ? 1 : prevPageNum - 1);
    }

    function handleNext() {
        setPageNum((prevPageNum) => pageNum === 5 ? 5 : prevPageNum + 1);
    }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <div className='grid md:grid-cols-4 h-3/4 w-3/4 py-5 pl-5 rounded-lg bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 gap-5 '>
            <div className="h-full col-span-1 p-5 rounded-lg bg-[#7c3bed] dark:bg-[#131023] ">
                <div className="pb-3">
                    <h7 className="uppercase text-sm font-semibold text-slate-300 dark:text-gray-500">Step 1</h7>
                    <h4 className="text-white">Company Information</h4>
                </div>
                <div className="pb-3">
                    <h7 className="uppercase text-sm font-semibold text-slate-300 dark:text-gray-500">Step 2</h7>
                    <h4 className="text-white">Primary Contact Person</h4>
                </div>
                <div className="pb-3">
                    <h7 className="uppercase text-sm font-semibold text-slate-300 dark:text-gray-500">Step 3</h7>
                    <h4 className="text-white">Account Information</h4>
                </div>
                <div className="pb-3">
                    <h7 className="uppercase text-sm font-semibold text-slate-300 dark:text-gray-500">Step 4</h7>
                    <h4 className="text-white">Plan Information</h4>
                </div>
                <div className="pb-3">
                    <h7 className="uppercase text-sm font-semibold text-slate-300 dark:text-gray-500">Step 5</h7>
                    <h4 className="text-white"> Billing Information</h4>
                </div>
            </div>
            <div className="h-full col-span-3 md:pl-14 py-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between h-full pr-5">
                        <div className='h-full'>

                            {
                                pageNum === 1 && <PageOne form={form} industries={industries} companySizes={companySizes} countries={countries} />
                            }
                            {
                                pageNum === 2 && <PageTwo form={form} designations = {designations} />
                            }
                            {
                                pageNum === 3 && <PageThree form={form} designations = {designations} />
                            }
                            {
                                pageNum === 4 && <PageFour form={form} />
                            }
                            {
                                pageNum === 5 && <PageFive form={form} />
                            }

                        </div>
                        <div className="flex space-x-4 mt-2">
                            <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                            {
                                pageNum !== 5 
                                    ? <Button onClick={handleNext}>Next</Button> 
                                    : <Button type="submit">Submit</Button>
                            }
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default page


function PageOne({ form, industries, companySizes, countries }){
    return (
        <>
            <div className="mb-5">
                <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Company Name<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Jahed International Corp" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Industry<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an industry" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {industries.map((industry, index) => (
                                        <SelectItem key={index} value={industry}>
                                        {industry}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Company Size<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Company Size" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {companySizes.map((companySize, index) => (
                                        <SelectItem key={index} value={companySize}>
                                        {companySize}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                         </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="streetAddress"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Street Address<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            <FormControl>
                                <Input placeholder="Street Address" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>City<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="City" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="stateOrProvince"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>State/Province<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="State/Province" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Postal Code<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Postal Code" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Country<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {countries.map((country, index) => (
                                        <SelectItem key={index} value={country}>
                                        {country}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Phone Number<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Phone Number" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Email Address<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Email Address" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

            </div>
        </>
    )
}

function PageTwo({ form, designations }){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="contactPersonFirstName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>First Name<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            <FormControl>
                                <Input placeholder="John" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="contactPersonLastName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Last Name<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            <FormControl>
                                <Input placeholder="Doe" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="contactPersonPhoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Phone Number<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Phone Number" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="contactPersonEmailAddress"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Email Address<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Email Address" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="contactPersonDesignation"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Designation<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an industry" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {designations.map((designation, index) => (
                                        <SelectItem key={index} value={designation}>
                                        {designation}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

            </div>
        </>
    )
}

function PageThree({ form, designations }){
    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="accountInformationFirstName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>First Name<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            <FormControl>
                                <Input placeholder="John" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="accountInformationLastName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Last Name<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            <FormControl>
                                <Input placeholder="Doe" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="accountInformationPhoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Phone Number<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Phone Number" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="accountInformationAddress"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Email Address<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Email Address" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="accountInformationDesignation"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Designation<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an industry" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {designations.map((designation, index) => (
                                        <SelectItem key={index} value={designation}>
                                        {designation}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="accountInformationPassword"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Phone Number<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Password" type="password" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="accountInformationPasswordConfirm"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Email Address<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Confirm Password" type="password" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

            </div>

        </>
    )
}

function PageFour({ form }) {
    const plans = [
        {
            value: 'oneMonth',
            title: '1 Month',
            description: 'Basic access for 1 month.',
            price: '$10',
        },
        {
            value: 'sixMonth',
            title: '6 Months',
            description: 'Standard access for 6 months.',
            price: '$50',
        },
        {
            value: 'twelveMonth',
            title: '12 Months',
            description: 'Premium access for 12 months.',
            price: '$90',
        },
        
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-5 h-full pb-10">
            <FormField
                control={form.control}
                name="subscriptionPlan"
                render={({ field }) => (
                    <FormItem className="space-y-3 h-full">
                        <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid gap-4 grid-cols-3 h-full">
                                {plans.map((plan) => (
                                    <FormItem key={plan.value} onClick={() => field.onChange(plan.value)} className={cn('h-full flex flex-col justify-between p-5 border rounded-lg w-full', field.value === plan.value ? 'bg-blue-500 text-white' : 'bg-white text-black','hover:bg-blue-500 hover:text-white')}>
                                        <div>
                                            <FormControl>
                                                <RadioGroupItem value={plan.value} className="hidden"/>
                                            </FormControl>
                                            <FormLabel className="font-bold text-lg">{plan.title}</FormLabel>
                                            <div className="text-sm">{plan.description}</div>
                                        </div>
                                        <div className="font-semibold">{plan.price}</div>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )}
            />
  
        </div>
    );
}

function PageFive({ form }) {
    
    return (
        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
            <div className='h-full'>
                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                <Label htmlFor="card"  className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="mb-3 h-6 w-6"
                    >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                    </svg>
                    Card
                </Label>
            </div>
            <div className='h-full'>
                <RadioGroupItem value="paypal" id="paypal" className="peer sr-only"/>
                <Label htmlFor="paypal" className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                
                Paypal
                </Label>
            </div>
            <div className='h-full'>
                <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                <Label htmlFor="apple" className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" height="80" width="120" viewBox="-18.0015 -28.3525 156.013 170.115"><g fill="none"><path fill="#D12053" d="M96.58 62.45l-53.03-8.31 7.03 31.6z"/><path fill="#E2136E" d="M96.58 62.45L56.62 6.93 43.56 54.15z"/><path fill="#D12053" d="M42.32 53.51L.45 0l54.83 6.55z"/><path fill="#9E1638" d="M23.25 31.15L0 9.24h6.12z"/><path fill="#D12053" d="M107.89 35.46l-9.84 26.69L82.1 40.09z"/><path fill="#E2136E" d="M56.77 84.14l38.61-15.51L97 63.7z"/><path fill="#9E1638" d="M25.89 113.41l16.54-58.02 8.39 37.75z"/><path fill="#E2136E" d="M109.43 35.67l-4.06 11.02 14.64-.24z"/></g></svg>
                    bKash
                </Label>
            </div>
        </RadioGroup>
    );
}


