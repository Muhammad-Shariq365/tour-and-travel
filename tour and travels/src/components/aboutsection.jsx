import React from 'react'
import Aboutheader from './aboutheader'
import Aboutwhoweare from './aboutwhoweare'
import Aboutwhychooseus from './aboutwhychooseus'
import Aboutourvision from './aboutourvision'
import Aboutourmission from './aboutourmission'
import Aboutpride from './aboutpride'
import Team from '../components/ourteam'

const Aboutsection = () => {
  return (
    <div className='overflow-hidden bg-gradient-to-r from-teal-50 to-blue-50 
    
    '>
     <Aboutheader />
     <Aboutwhoweare />
     <Aboutwhychooseus />
     <Aboutourvision />
     <Aboutourmission />
     <Aboutpride />
     <Team />
    </div>
  )
}

export default Aboutsection