"use client"

import { useState, FormEvent } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendContactForm } from '../../lib/api';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await sendContactForm(name, email, message);
      toast('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast('An error occurred. Please try again.');
    }
  };

  return (
   <section className='border bg-set'>
    <h1 className='h2-bold mt-12 ml-7'>Contact Us</h1>
     <div className='mt-2 flex flex-col-reverse gap-10 items-center xl:ml-4 md:ml-1 sm:ml-0 '>
      <form onSubmit={handleSubmit}  className='mt-12 flex flex-col gap-8'>
        <label className='flex flex-col'>
          <span className='font-medium mb-4'>Your Name</span>
          <input
            type="text"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg font-medium border'
            placeholder="What's your good name?"
            value={name}
            onChange={e => setName(e.target.value)} />
        </label>
        <label className='flex flex-col'>
          <span className='font-medium mb-4'>Your email</span>
          <input
            type="email"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg font-medium border'
            placeholder='john@email.com'
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </label>
        <label className='flex flex-col'>
          <span className='font-medium mb-4'>Your Message</span>
          <textarea
            value={message}
            rows={7}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg font-medium border'
            placeholder='Request a free qoute'
            onChange={e => setMessage(e.target.value)} />
        </label>
        <div className='mt-7' >
          <input type="submit" value="Submit" className='bg-indigo-500 cursor-pointer rounded-full p-3 w-fit text-white font-bold shadow-md shadow-primary mb-7' />
        </div>
      </form>
      <ToastContainer />
    </div>
    
   </section>
  );
}

export default ContactPage;