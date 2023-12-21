import Loader from "../authentication/Loader"
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6'
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const postRating = async (movieId) => {
  const response = await fetch(`https://movie-orld.onrender.com/rating/rate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ movieId }),
  });

  if (!response.ok) {
    throw new Error('Failed to post rating');
  }

  return response.json();
};
const Rating = () => {
  const {movieId}=useParams()
  const [rating, setRating] = useState(0);
  const { mutate,isLoading } = useMutation(postRating, {
    onSuccess: (data) => {
      toast.success("Rated successfully")
    },
    onError: (error) => {
      // Handle error
      console.error('Error posting rating:', error.message);
    },
  });

  const handleRating = (value) => {
    setRating(value);
  };
  const handleSubmit = () => {
   const userId=localStorage.getItem("e")
   if(userId){
    mutate({ userId:userId, movieId, rating });
   } else{
    toast.warn("You need to login first")
   }
  };

  return (
    <div className="flex flex-col relative items-center">
      <p className="text-lg font-medium font-serif">Please rate your movie</p>
      <div className="flex items-center mt-5 flex-row">
      {[1, 2, 3, 4, 5].map((index) => (
        <FaStar
        key={index}
        className={`h-8 w-8 text-black cursor-pointer ${
          index <= rating ? 'fill-current text-yellow-500' : ''
        }`}
        onClick={() => handleRating(index)}
        />
      ))}
      </div>
      <button
        className="ml-4 bg-black mt-5 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        {
          isLoading?
          <Loader size={20}/>:
          <p>Submit</p>
        }
      </button>
      
    </div>
  );
};

export default Rating;
