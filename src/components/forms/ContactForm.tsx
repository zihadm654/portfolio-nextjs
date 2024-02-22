'use client';

import { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { PiCheckLight, PiSmiley } from 'react-icons/pi';
import { Button } from '../ui/button';
import { toast } from 'sonner';
const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    'Evaluate Bird for my company',
    'Learn More',
    'Get a Quote',
    'Other',
  ]),
  company_size: z.enum([
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '501-1000',
    '1000+',
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: 'Evaluate Bird for my company' | 'Learn More' | 'Get a Quote' | 'Other';
  company_size: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+';
  info: string;
  terms: boolean;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      job_title: '',
      company_name: '',
      help: 'Learn More',
      company_size: '1-10',
      info: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      setSubmitted(true);
    } catch (error) {
      toast('Something went wrong');
    } finally {
      setLoading(false);
    }
  }
  return (
    <Form {...form}>
      {!submitted ? (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='gap-4 flex items-start justify-center flex-col min-w-max'
        >
          <div className='flex items-center justify-between w-full space-x-4 gap-6 max-md:space-x-0 max-sm:space-x-0 max-sm:flex-col'>
            <FormField
              control={form.control}
              name='first_name'
              render={({ field }) => (
                <FormItem className='items-center justify-center w-full'>
                  <FormLabel className='text-lg'>First name *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='John' />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='last_name'
              render={({ field }) => (
                <FormItem className='items-center justify-center w-full'>
                  <FormLabel className='text-lg '>Last name *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Doe' />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='items-center justify-center  w-2/3'>
                <FormLabel className='text-lg'>Email *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='email@gmail.com' />
                </FormControl>
              </FormItem>
            )}
          />
          <div className='flex items-center justify-between w-full space-x-4 gap-6 max-md:space-x-0 max-sm:space-x-0 max-sm:flex-col'>
            <FormField
              control={form.control}
              name='company_name'
              render={({ field }) => (
                <FormItem className='items-center justify-center  w-full'>
                  <FormLabel className='text-lg '>Company name?</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='domino' />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='company_size'
              render={({ field }) => (
                <FormItem className='items-center justify-center w-full'>
                  <FormLabel className='text-lg '>Company size ?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='text-lg'>
                        <SelectValue placeholder='Select an option' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <div className='flex gap-4 text-lg'>
                        <SelectItem value='1-10'>1-10</SelectItem>
                      </div>
                      <SelectItem value='11-50'>11-50</SelectItem>
                      <SelectItem value='51-200'>51-200</SelectItem>
                      <SelectItem value='501-1000'>501-1000</SelectItem>
                      <SelectItem value='1000+'>1000+</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='help'
            render={({ field }) => (
              <FormItem className='items-center justify-start w-2/3'>
                <FormLabel className='text-lg'>How can we help ?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select an option' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className='flex gap-4'>
                      <SelectItem value='Evaluate Bird for my company'>
                        Evaluate Bird for my company
                      </SelectItem>
                    </div>
                    <SelectItem value='Learn More'>Learn More</SelectItem>
                    <SelectItem value='Get a Quote'>Get a Quote</SelectItem>

                    <SelectItem value='Other'>Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='info'
            render={({ field }) => (
              <FormItem className='items-center justify-center w-full'>
                <FormLabel className='text-lg '>Anything else ?</FormLabel>
                <FormControl>
                  <Textarea
                    style={{ height: '100px' }}
                    {...field}
                    placeholder='tell us more'
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className='flex gap-4 items-center justify-start w-2/3'>
            <Checkbox className='text-lg text-purple-900' />
            <div className='text-sm font-light md:w-3/4 mb-1 '>
              I agree to Bird&apos; sending marketing communications related to
              bird
            </div>
          </div>
          <div className='self-start'>
            <Button
              type='submit'
              className='justify-items-start text-sm font-light py-3'
              disabled={loading}
              onClick={() => form.handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </div>
        </form>
      ) : (
        <>
          <div className='text-xl md:text-2xl flex items-center justify-center flex-col px-8'>
            <div className='w-80 py-20'>
              <PiSmiley className='text-6xl text-[#6c6684] mx-auto' />

              <div className='text-gray-500 font-light  text-center justify-center mx-auto py-10'>
                We&apos;ve received your inquiry and will be contacting you via
                email shortly.
              </div>
            </div>
          </div>
        </>
      )}
    </Form>
  );
};

export default ContactForm;
