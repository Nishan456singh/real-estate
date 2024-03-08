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
    if (!email){
      setError('Please enter your email');
      return;
    }
    if (!message){
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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?? "",
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
   <section className='border border-black rounded-lg bg-set'>
    <h1 className='h2-bold mt-12 ml-7'>Contact Us</h1>
     <div className='mt-2 flex flex-col-reverse gap-10 items-center xl:ml-4 md:ml-1 sm:ml-0 '>
      <form onSubmit={sendEmail}  className='mt-12 flex flex-col gap-8'>
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-error">{error}</div>}
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
    </div>
   </section>
  );
}

export default ContactPage;