"use client"

import React from 'react'
import PageHeader from '@/components/PageHeader'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"

import { Check, ChevronsUpDown, Calendar as CalendarIcon } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { cn } from '@/lib/utils'


const page = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [date, setDate] = React.useState()
  
  const formSchema = z.object({
    clientID: z.string().trim().min(1, { message: 'Select a Client' }),
    wopoRefNo: z.string().trim().min(1, { message: 'WO/PO Reference Number is Required' }),
    wopoRefDate: z.date({ message: 'WO/PO Date is Required' }),
    wopoReceivedDate: z.string().trim().min(1, { message: 'WO/PO Received Date is Required' }),
    projectDesc: z.string().trim().min(1, { message: 'Project Description is Required' }),
    projectType: z.string().trim().min(1, { message: 'Project Type is Required' }),
    wopoValue: z.string().trim()
      .min(1, { message: 'WO/PO Value is Required' })
      .regex(/^[0-9]+(\.[0-9]+)?$/, { message: 'Enter Only Numeric Values' }),
    exchangeRate: z.string().trim()
      .min(1, { message: 'Exchange Rate is Required' })
      .regex(/^[0-9]+(\.[0-9]+)?$/, { message: 'Enter Only Numeric Values' }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientID: "",
      wopoRefNo: "",
      wopoRefDate: "",
      wopoReceivedDate: "",
      projectDesc: "",
      projectType: "",
      wopoValue: "",
      exchangeRate: "",
    },
  })

  const clientList = [
    {
      value: "AB Bank Plc",
      label: "AB Bank Plc",
    },
    {
      value: "Bangladesh Bank",
      label: "Bangladesh Bank",
    },
    {
      value: "Bangladesh Computer Council",
      label: "Bangladesh Computer Council",
    },
    {
      value: "Habib Bank Limited",
      label: "Habib Bank Limited",
    },
    
  ]
  

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <div className="p-5 w-full h-full bg-white dark:bg-slate-800 rounded-md">
      <PageHeader pageTitle={'Create Business Initiative'}/> 
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-5">
            <div className="form-group form-inline">

              <FormField 
                control={form.control}
                name="clientID"
                render={({ field }) => (
                  <FormItem className={cn('md:flex items-center')}>
                    <FormLabel className={cn('w-[35%]')}>Client Name</FormLabel>
                    <div className="w-full">
                      <FormControl>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-full justify-between"
                            >
                              {value
                                ? clientList.find((clientList) => clientList.value === value)?.label
                                : "Select framework..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Command>
                              <CommandInput placeholder="Search framework..." />
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                <CommandList>
                                  {clientList.map((client) => (
                                    <CommandItem
                                      key={client.value}
                                      value={client.value}
                                      onSelect={(currentValue) => {
                                        setValue(client.value); // Update local state
                                        form.setValue("clientID", client.value); // Update form state
                                        //setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          value === client.value ? "opacity-100" : "opacity-0"
                                        )}
                                      />
                                      {client.label}
                                    </CommandItem>
                                  ))}
                                </CommandList>
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="wopoRefNo"
                render={({ field }) => (
                  <FormItem className={cn('md:flex items-center')}>
                    <FormLabel className={cn('w-[35%]')}>WO/PO Ref. No.</FormLabel>
                    <div className="w-full">
                      <FormControl>
                        <Input placeholder="WO/PO Reference No." {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="wopoRefDate"
                render={({ field }) => (
                  <FormItem className={cn('md:flex items-center')}>
                    <FormLabel className={cn('w-[35%]')}>WO/PO Date</FormLabel>
                    <div className="w-full">
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="wopoReceivedDate"
                render={({ field }) => (
                  <FormItem className={cn('md:flex items-center')}>
                    <FormLabel className={cn('w-[35%]')}>WO/PO Received</FormLabel>
                    <div className="w-full">
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="projectDesc"
                render={({ field }) => (
                  <FormItem className={cn('md:flex items-center')}>
                    <FormLabel className={cn('w-[35%]')}>Project/Goods Description</FormLabel>
                    <div className="w-full">
                      <FormControl>
                        <Textarea
                          placeholder="Project/Goods Description"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

            </div>
            <div>
              <FormField 
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem className={cn('md:flex items-center')}>
                    <FormLabel className={cn('w-[35%]')}>Project Type</FormLabel>
                    <div className="w-full">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="software" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Software
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="hardware" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Hardware
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="amc" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              AMC
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

<FormField 
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem className={cn('md:flex items-center')}>
                    <FormLabel className={cn('w-[35%]')}>Project Type</FormLabel>
                    <div className="w-full">
                      <FormControl>
                        
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
                  
            </div>
          </div>
          <Button type="submit">Submit</Button>                              
        </form>
      </Form>

    </div>
  )
}

export default page