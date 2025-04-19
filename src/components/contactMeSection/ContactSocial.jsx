import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-center'>
        <SingleContactSocial Link='https://www.linkedin.com/in/paras-rana-696b7731b/' Icon={FaLinkedin}/>
        <SingleContactSocial Link='https://github.com/ParasRana123' Icon={FaGithub}/>
        <SingleContactSocial Link='https://www.instagram.com/_theparas_/' Icon={FaInstagram}/>
    </div>
  )
}

export default ContactSocial
