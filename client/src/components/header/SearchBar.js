import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
const SearchBar = () => {
  return (
    <div className="flex  relative items-center  rounded-md border flex-[0.4] text-black">
      <CiSearch size={20} className=' absolute left-0' />
    <input type="text" placeholder="Search movies..." className=" rounded-md flex-1 outline-none pl-5  py-1" />
    <div className='flex absolute right-1 items-center flex-rows cursor-pointer bg-gray-300 px-3 py-[3px] rounded-md'>
      <p className=' font-medium text-md '>All</p>
      <IoMdArrowDropdown />
    </div>
  </div>

  )
}

export default SearchBar