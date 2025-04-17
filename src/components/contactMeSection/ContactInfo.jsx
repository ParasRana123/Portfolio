import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="parasrana579@gmail.com" Image={MdOutlineMail}/>
        <SingleInfo text="+91 9372636816" Image={MdOutlineLocalPhone}/>
        <SingleInfo text="Nagpur , Maharashtra" Image={IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo
