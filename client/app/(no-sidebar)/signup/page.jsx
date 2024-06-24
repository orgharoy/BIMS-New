"use client"

import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/schema';
import { cn } from '@/lib/utils';

const page = () => {
    const [pageNum, setPageNum] = React.useState(1);
    const industries = ["Agriculture", "Automotive", "Banking & Financial Services", "Biotechnology", "Construction", "Consumer Goods",  "Education",  "Energy",  "Entertainment & Media",  "Environmental Services", "Food & Beverage", "Government", "Healthcare", "Hospitality", "Information Technology", "Insurance", "Manufacturing", "Mining", "Non-Profit", "Pharmaceuticals", "Real Estate", "Retail", "Telecommunications", "Transportation & Logistics", "Travel & Tourism"];
    const companySizes = ["Small", "Medium", "Large"];
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda"]; 

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
        }
    })

    function onSubmit(values) {
        console.log(values);
    }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <div className='grid md:grid-cols-4 h-4/5 py-5 pl-5 rounded-lg bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 gap-5 '>
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
                    <h4 className="text-white">Billing Information</h4>
                </div>
                <div className="pb-3">
                    <h7 className="uppercase text-sm font-semibold text-slate-300 dark:text-gray-500">Step 5</h7>
                    <h4 className="text-white">Plan Information</h4>
                </div>
            </div>
            <div className="h-full overflow-y-scroll col-span-3 md:pl-14 py-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pr-5">
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    {/* <FormDescription>
                                        This is your company name
                                    </FormDescription> */}
                                    <div className="h-1">
                                        <FormMessage/>
                                    </div>
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="industry"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Industry</FormLabel>
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
                                        {/* <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/examples/forms">email settings</Link>.
                                        </FormDescription> */}
                                        <div className="h-1">
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="companySize"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Size</FormLabel>
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
                                        {/* <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/examples/forms">email settings</Link>.
                                        </FormDescription> */}
                                        <div className="h-1">
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                )}
                            />

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="streetAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Street Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Street Address" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/examples/forms">email settings</Link>.
                                        </FormDescription> */}
                                        <div className="h-1">
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input placeholder="City" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/examples/forms">email settings</Link>.
                                        </FormDescription> */}
                                        <div className="h-1">
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                )}
                            />

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="stateOrProvince"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>State/Province</FormLabel>
                                        <FormControl>
                                            <Input placeholder="State/Province" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/examples/forms">email settings</Link>.
                                        </FormDescription> */}
                                        <div className="h-1">
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="postalCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Postal Code</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Postal Code" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/examples/forms">email settings</Link>.
                                        </FormDescription> */}
                                        <div className="h-1">
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Country</FormLabel>
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
                                        {/* <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/examples/forms">email settings</Link>.
                                        </FormDescription> */}
                                        <div className="h-1">
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                )}
                            />

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Phone Number" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/examples/forms">email settings</Link>.
                                        </FormDescription> */}
                                        <div className="h-1">
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="emailAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email Address" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/examples/forms">email settings</Link>.
                                        </FormDescription> */}
                                        <div className="h-1">
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                )}
                            />

                        </div>
                        
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default page