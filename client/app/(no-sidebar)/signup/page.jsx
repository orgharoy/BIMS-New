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

    function handlePrevious() {
        setPageNum((prevPageNum) => pageNum === 1 ? 1 : prevPageNum - 1);
        console.log(pageNum);
    }

    function handleNext() {
        setPageNum((prevPageNum) => pageNum === 5 ? 5 : prevPageNum + 1);
        console.log(pageNum);
    }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <div className='grid md:grid-cols-4 h-3/4 py-5 pl-5 rounded-lg bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 gap-5 '>
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
            <div className="h-full col-span-3 md:pl-14 py-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between h-full pr-5">
                        <div>

                            {
                                pageNum === 1 && <PageOne form={form} industries={industries} companySizes={companySizes} countries={countries} />
                            }
                            {
                                pageNum === 2 && <PageTwo form={form} />
                            }

                        </div>
                        <div className="flex space-x-4">
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

function PageTwo({ form }){
    return (
        <>

        </>
    )
}