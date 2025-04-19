import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
        <h2 className='text-6xl text-cyan-500 mb-10 text-center'>Contact Me</h2>
        <div className='flex flex-col lg:flex-row justify-between gap-24 bg-[#3E2723] p-8 rounded-2xl'>
            <ContactMeLeft />
            <ContactMeRight />
        </div>
    </div>
  )
}

export default ContactMeMain