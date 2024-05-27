"use client"
import React from 'react'
import { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import emailjs from '@emailjs/browser';

function SparklesPreview() {

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
      to_name: 'Nishan singh',
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
      setEmail('');
      setMessage('');
    } catch (error) {
      setError('Failed to send your message');
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full absolute inset-0"
        particleColor="#FFFFFF"
      />
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help and answer any question you might have.
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          You can also reach us at <a href="mailto:aura24@gmail.com" className="text-white max-w-lg mx-auto my-2 text-sm underline text-center">aura24@gmail.com</a>
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Or call us at <a href="tel:+1-778-823-0751" className="text-white max-w-lg mx-auto my-2 text-sm underline text-center">+1-778-823-0751</a>
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We will get back to you as soon as possible.
        </p>
        <form onSubmit={sendEmail} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          {success && <div className="alert alert-success text-green-500">{success}</div>}
          {error && <div className="alert alert-error text-red-500">{error}</div>}
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
export default SparklesPreview;