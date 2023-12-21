import React from 'react'
import { RiUserLine } from "react-icons/ri";
import { data } from '../data';
import { useNavigate } from 'react-router-dom';

const NavItem = () => {
  const navigate=useNavigate()
  const handleAUth=()=>{
    navigate("/login")
  }
  return (
    <div className='flex-[0.25]'>
      <div className='flex items-center justify-between  flex-row'>
      {
        data.map((item,index)=>{
          return(
            <div key={index}>
            <p className='text-white cursor-pointer font-serif font-medium text-lg'>{item.name}</p>
            </div>
          )
        })
      }
      <RiUserLine onClick={handleAUth} size={22} className='ml-3 cursor-pointer text-white' />
      </div>
    </div>
  )
}

export default NavItem