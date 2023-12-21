import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';


const postData = async (newData) => {
  const response = await fetch('http://localhost:8081/watch/watchlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });

  if (!response.ok) {
    toast.error('Failed to create watche-list');
  }

  return response.json();
};
const MovieCard = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mutation = useMutation(postData);

  const handleWatched=async(id)=>{
    const userId=localStorage.getItem("e")
    if(!userId){
      toast.warning("You need to login first")
    }else{
       await mutation.mutateAsync({
        userId:userId,
        movieId:id
      });
      toast.success("Movie added to the atch list")

    } 
  }
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className='flex py-5 w-full items-center flex-row  overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden  '>
      <div className='flex item-center flex-row'>
      {
        data?.map((item,index)=>(
          <div className={`h-[435px] w-[250px] relative bg-[#13181C] rounded-lg cursor-pointer mx-3 my-2 ${
            index === activeIndex ? ' border-[3px] border-[blue]  ' : ''
          }`}  key={index} onClick={() => handleImageClick(index)}>
           <img
            className={`rounded-t-lg w-[250px] h-[270px] object-cover  `}
            src={item?.movie?.image}
            alt={item?.title}
          />

          <div >
            <p className=' font-serif text-lg font-bold text-left p-2 text-white'>{item?.movie?.title}</p>
            <div className='flex px-2 items-center flex-row'>
              {
                <FaStar size={23} className='text-yellow-400' />
              }
            <p className=' font-serif text-lg text-white ml-2 font-medium'>{item?.avgRating}({item?.totalRatings})</p>
            </div>
            <div onClick={()=>handleWatched(item?.movie?._id)} className='flex mt-2 mx-auto items-center bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r text-white px-4  py-2 rounded-3xl w-fit font-bold shadow-md flex-row'>
            {
                item?.watched?<IoCheckmarkOutline size={23} />:
                <FaPlus size={23} />
              }
                  <button
              className="ml-3"
          > WATCH LIST
          </button>
            </div>
            <div className='flex absolute bottom-2 left-2 items-center flex-row'>
            <AiOutlinePlayCircle size={20} className='text-white' />
            <p className='uppercase font-medium text-white ml-3'>Trailer</p>
            </div>
          </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default MovieCard