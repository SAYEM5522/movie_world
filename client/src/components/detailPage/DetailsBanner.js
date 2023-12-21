import React, { useState } from 'react'
import Header from '../header/Header'
import DetailsNumber from './DetailsNumber'
import YouTubeVideo from './YouTubeVideo'
import { FaStar } from 'react-icons/fa6'
import { FaRegStar } from "react-icons/fa6";
import { Modal } from '@mui/material'
import { RxCross2 } from 'react-icons/rx'
import MovieRating from './MovieRating'
const style={
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"30%",
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 1,
  outline: 0,
  height:250,
  border:"2px"
}
const DetailsBanner = ({data,totalR,avgR}) => {
  const [open,setOpen]=useState(false)
  const handleRating=()=>{
   setOpen(true)
  }
  return (
    <div>
      <Header/>
      <div className='flex items-center flex-row py-5 mx-auto'>
        <div className='w-[300px]'>
         <img
         className='rounded-lg cursor-pointer'
         src={data?.image}
         />
        </div>
        <div>
        <div className='ml-5'>
        <YouTubeVideo videoUrl={data?.trailerUrl} />
        </div>
        </div>
      </div>
      <div className=' flex flex-row items-center'>
      <div className='w-[40%]'>
       <DetailsNumber videos={data?.videos} episodes={data?.episodes} photos={data?.photos} />
      </div>
      <div>
      <div className='flex items-start flex-col border-l-[2px] border-l-[#0369A0] px-2'>
        <p className='text-white font-medium text-start py-2 text-md'>{data?.description}</p>
        <p className='text-white'><span className='text-lg text-left font-medium  leading-tight tracking-widest text-[#0369A0]'>Creator: </span>{data?.creator}</p>
        <div className='flex px-2 py-2 items-center flex-row'>
              {
                <FaStar size={23} className='text-yellow-400' />
              }
            <p className=' font-serif text-lg text-white ml-2 font-medium'>{avgR}({totalR})</p>
            <div onClick={handleRating} className='flex items-center flex-row'>
            <FaRegStar  size={23} className='mx-3 text-[#0369A0]' />
            <button className='text-white'>Rate Now</button>
            </div>
            
            </div>
      </div>
      </div>
      </div>
      {
        <Modal
        keepMounted
        open={open}
        // onClose={removeModel}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        >
        <div style={style} className=" bg-white flex  relative overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden  justify-center h-screen rounded-md  py-2">
          <MovieRating/>
        <RxCross2 onClick={()=>setOpen(false)} size={25} className=" absolute top-2 right-2 cursor-pointer"/>
        </div>
        </Modal>
      }
    </div>
  )
}

export default DetailsBanner