'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name shout not be blank",
    }),
    email: z.string().email({
        message: "Invalid email",
    }),

    message: z.string().min(1, {
        message: "Message should not be blank",
    }),
})

const ContactSection = () => {


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",

        },
    })

    function onSubmit(values) {

        console.log(values)
    }
    return (
        <div id='contact' name='contact' className='w-full pt-20  flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center gap-2'>
            <h1 className=' font-bold text-3xl'>Contact</h1>
            <p>Submit the form below to get in touch with me</p>
            </div>
             <div className='min-w-[60%] max-lg:min-w-[90%] max-md:w-full '>
             <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                              
                                <FormMessage />
                            </FormItem>
                            
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input  placeholder="Enter your email" {...field} />
                                </FormControl>
                              
                                <FormMessage />
                            </FormItem>
                            
                        )}
                    />
                    <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
                    <Button className='w-full' type="submit">Submit</Button>
                </form>
            </Form>
             </div>
        </div>
    )
}

export default ContactSection