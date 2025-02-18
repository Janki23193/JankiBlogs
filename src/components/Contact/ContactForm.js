"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in flex flex-col gap-10'>
      <input type="text" placeholder="Name" {...register("Name", {required: true})} className='' />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Phone number" {...register("Project details", {})} />
      <textarea {...register} />

      <input type="submit" value="Send Request" className='mt-8 inline-block font-medium capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark
      dark:border-light rounded cursor-pointer'/>
    </form>
  );
}