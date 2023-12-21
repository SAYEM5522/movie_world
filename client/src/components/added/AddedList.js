import React, { useCallback, useState } from 'react'
import AddedDetails from './AddedDetails'
import { FaPlus } from 'react-icons/fa6'
import { Modal } from '@mui/material'
import MovieEditor from './MovieEditor'
import { RxCross2 } from 'react-icons/rx'
import { useQuery } from 'react-query'
const style={
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"55%",
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 1,
  outline: 0,
  height:550,
  border:"2px"
}
const movieCard=[
  {
    id:1,
    url:"https://image.tmdb.org/t/p/original//vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",


  },
  {
    id:2,
    url:"https://image.tmdb.org/t/p/original//vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",


  },
  {
    id:3,
    url:"https://image.tmdb.org/t/p/original//vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",


  },
  {
    id:4,
    url:"https://image.tmdb.org/t/p/original//vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",


  },
  {
    id:5,
    url:"https://image.tmdb.org/t/p/original//vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",


  },
  {
    id:6,
    url:"https://image.tmdb.org/t/p/original//vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
  },
  
]
const fetchData = async (userId) => {
  const response = await fetch(`http://localhost:8081/movie/all-added-movies/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const AddedList = () => {
 const [open,setOpen]=useState(false)
 const userId=localStorage.getItem("e")
 const { data, error, isLoading } = useQuery(['myData', userId], () => fetchData(userId));
 const removeModel=useCallback(()=>{
  setOpen(false)
 },[open])

  return (
    <div className='flex w-full items-center flex-row  overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden  '>
      <div className='flex items-center flex-row'>
      {data?.addedMovies?.map((item, index) => (
        <div
          className={` cursor-pointer w-[270px] h-[330px]  mx-3 my-2 `}
          key={index}
        >
          <AddedDetails item={item} />
        </div>
      ))}
      <div className='rounded-xl flex justify-center items-center mr-2 w-[310px] h-[330px] bg-[#0F1316] border-[2px] border-dotted border-white'>
      <div className='flex mt-2 mx-auto items-center bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r text-white px-4  py-2 rounded-3xl w-fit font-bold shadow-md flex-row'>
      <div onClick={()=>setOpen(true)} className='flex items-center flex-row'>   
      <FaPlus size={23} />
        <button
        
    className="ml-3"
    > ADD MOVIE
    </button>
    
    )
      
    
</div>  
            </div>
      </div>
      </div>
      {
        open&&(
          <Modal
    keepMounted
    open={open}
    onClose={removeModel}
    aria-labelledby="keep-mounted-modal-title"
    aria-describedby="keep-mounted-modal-description"
    >
    <div style={style} className=" bg-white flex  relative overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden  justify-center h-screen rounded-md  py-2">
      <MovieEditor/>
    <RxCross2 onClick={()=>setOpen(false)} size={25} className=" absolute top-2 right-2 cursor-pointer"/>
    </div>
    </Modal>
        )
      }
    </div>
  )
}

export default AddedList