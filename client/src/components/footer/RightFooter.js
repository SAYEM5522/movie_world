import React from 'react'
import Logo from '../header/Logo'

const RightFooter = () => {
  return (
    <div className="flex flex-col items-center ">
      <Logo/>
        <div className='text-center w-[70%]'>
        <p className='text-white'>©2021 movieworld.com. All Rights Reserved.</p>
        <p className='text-white  '>This site is not affiliated or owned by the listed movie streaming platform owners.</p>
        </div>
        
      </div>
  )
}

export default RightFooter