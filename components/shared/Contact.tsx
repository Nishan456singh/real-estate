"use client"

import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs.send('service_r0htc9l', 'template_w7ww69e', { from_email: 'sjhomes1359@gmail.com', name, email, message }, 'eqP3oAFgwH25mZ434')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
   <section className='border'>
    <h1 className='h2-bold mt-12 ml-7'>Contact Us</h1>
     <div className='mt-2 flex flex-col-reverse gap-10 items-center xl:ml-4 md:ml-1 sm:ml-0 '>
      <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
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

export default Contact;