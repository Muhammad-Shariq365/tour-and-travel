import React from 'react'
import Servicesheader from './servicesheader'
import HajjAndUmrahServices from './hajjumrahservice'
import VisaServices from './visaservices'
import HoneymoonService from './honeymoonservice'
import GroupToursService from './grouptourservice'

const services = () => {
  return (
    <div className='bg-gradient-to-r from-teal-50 to-blue-50'>
      <Servicesheader />
      
       <VisaServices />
       <HajjAndUmrahServices />
       <GroupToursService />
       <HoneymoonService />
       
    </div>
  )
}

export default services