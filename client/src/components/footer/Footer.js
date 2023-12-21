import React from 'react'
import BootomFooter from './BootomFooter'
import LeftFooter from './LeftFooter'
import MiddleFooter from './MiddleFooter'
import RightFooter from './RightFooter'

const Footer = () => {
  return (
    <div className='bg-black py-10'>
      <div className='flex items-start  flex-row justify-evenly'>
        <LeftFooter/>
        <MiddleFooter/>
        <RightFooter/>
      </div>
      <div>
        <BootomFooter/>
      </div>
    </div>
  )
}

export default Footer