import React from 'react'
import Contactheader from '../components/contactheader'
import Contacthero from '../components/contacthero'
import ContactSocialMedia from '../components/contactsocialmedia'

const contactsection = () => {
  return (
    <div className='bg-gradient-to-r from-teal-50 to-blue-50'>
        <Contactheader />
        <Contacthero />
        <ContactSocialMedia />
    </div>
  )
}

export default contactsection