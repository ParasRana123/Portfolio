import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [message , setMessage] = useState("")
    const [success , setSuccess] = useState("")

    const handleName = (e) => {}
    const handleEmail = (e) => {}
    const handleMessage = (e) => {}
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_tbqz1r8', 'template_4koys0f', form.current, {
            publicKey: 'jPlRgqrDIEVjPNt2g',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className='flex flex-col gap-4'>
        <form action="" ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="" placeholder='Your Name' className='h-12 rounded-lg bg-amber-900 px-2 text-white' required/>
            <input type="email" name="name" id="" placeholder='Your Email' className='h-12 rounded-lg bg-amber-900 px-2' required/>
            <textarea name="message" id="" placeholder='Message' rows="9" cols="50" className='rounded-lg bg-amber-900 p-2' required></textarea>
            <button type="submit" className='w-full rounded-lg border border-cyan-500 text-white h-12 font-bold text-xl hover:bg-cyan-700 bg-cyan-500 transistion-all duration-500'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm
