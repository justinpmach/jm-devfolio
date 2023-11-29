'use client';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_URL as string
  );
  console.log('env:', process.env.NEXT_PUBLIC_FORMSPREE_URL);
  console.log('state:', state);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='lg:col-span-2 w-full border border-slate-300 rounded-md shadow-sm p-6'
    >
      <div className='grid grid-cols-2 gap-5 w-full'>
        <div className='flex flex-col items-start'>
          <label
            htmlFor='email'
            className='text-xs sm:text-sm lg:text-md font-semibold tracking-widest uppercase text-gray-400'
          >
            Name:
          </label>
          <div className='flex justify-center w-full'>
            <input
              id='name'
              type='name'
              name='name'
              className='mt-2 max-w-lg w-full h-10 rounded-md shadow-sm border border-gray-200 py-2 px-4 text-gray-700'
            />
          </div>
          <ValidationError prefix='Name' field='name' errors={state.errors} />
        </div>
        <div className='flex flex-col items-start'>
          <label
            htmlFor='email'
            className='text-xs sm:text-sm lg:text-md font-semibold tracking-widest uppercase text-gray-400'
          >
            Email Address:
          </label>
          <div className='flex justify-center w-full'>
            <input
              id='email'
              type='email'
              name='email'
              className='mt-2 max-w-lg w-full h-10 rounded-md shadow-sm border border-gray-200 py-2 px-4 text-gray-700'
            />
          </div>
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
      </div>
      <div className='flex flex-col mt-6 items-start'>
        <label
          htmlFor='message'
          className='font-semibold tracking-widest uppercase text-gray-400'
        >
          Message:
        </label>
        <div className='text-xs sm:text-sm lg:text-md flex justify-center w-full'>
          <textarea
            id='message'
            name='message'
            rows={6}
            className='mt-2 w-full rounded-md shadow-sm border border-gray-200 py-2 px-4 text-gray-700'
          />
        </div>
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
      </div>
      <div className='flex justify-center w-full mt-8'>
        <button
          type='submit'
          disabled={state.submitting}
          className='max-w-sm w-full border border-gray-500 rounded-md shadow-sm px-4 py-2 text-center hover:bg-gray-200 transition-all'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
