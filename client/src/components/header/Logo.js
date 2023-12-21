import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate=useNavigate()
  const handleLogo=()=>{
   navigate("/")
  }
  return (
    <div onClick={handleLogo}>
      <img className='cursor-pointer' src='/logo.png' width={80} height={80}/>
    </div>
  )
}

export default Logo