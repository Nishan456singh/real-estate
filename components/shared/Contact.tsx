"use client"

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const sendEmail = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSuccess('');
    if (!email) {
      setError('Please enter your email');
      return;
    }
    if (!message) {
      setError('Please enter your message');
      return;
    }
    const templateParams = {
      from_name: email,
      to_name: 'Simranjit Saini',
      message,
    };

    setError('');
    setIsLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setSuccess('Your message has been sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError('Failed to send your message');
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <section className='border border-shadow rounded-lg bg-set p-4 sm:p-8 md:p-12'>
      <h1 className='h3-bold sm:text-2xl md:text-3xl mt-4 sm:mt-8 md:mt-12 ml-4 sm:ml-7'>Contact Us</h1>
      <div className='mt-2 flex flex-col gap-4 sm:gap-6 md:gap-10 items-center'>
        <form onSubmit={sendEmail} className='mt-4 sm:mt-8 md:mt-12 flex flex-col gap-4 sm:gap-6 md:gap-8'>
          <label className='flex flex-col'>
            <span className='font-medium mb-2 sm:mb-3 md:mb-4'>Your Name</span>
            <input
              type="text"
              className='bg-tertiary py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 placeholder:text-secondary rounded-lg font-medium border'
              placeholder="What's your good name?"
              value={name}
              onChange={e => setName(e.target.value)} />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-2 sm:mb-3 md:mb-4'>Your email</span>
            <input
              type="email"
              className='bg-tertiary py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 placeholder:text-secondary rounded-lg font-medium border'
              placeholder='john@email.com'
              value={email}
              onChange={e => setEmail(e.target.value)} />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-2 sm:mb-3 md:mb-4'>Your Message</span>
            <textarea
              value={message}
              rows={7}
              className='bg-tertiary py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 placeholder:text-secondary rounded-lg font-medium border'
              placeholder='Request a free qoute'
              onChange={e => setMessage(e.target.value)} />
          </label>
          {success && <div className="alert alert-success text-green-500">{success}</div>}
          {error && <div className="alert alert-error text-red-500">{error}</div>}
          <div className='mt-4 sm:mt-6 md:mt-7' >
            <input type="submit" value="Submit" className='bg-indigo-500 cursor-pointer rounded-full p-2 sm:p-3 md:p-4 w-full sm:w-auto text-white font-bold shadow-md shadow-primary mb-4 sm:mb-6 md:mb-7' />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;