import React, { useState } from 'react'
import ImageInput from './ImageInput'
import { useSubmitFormData } from './FormData';
import {  toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Loader from '../authentication/Loader';
const MovieEditor = () => {
  const { mutate,isLoading } = useSubmitFormData();
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description:"",
    creator: '',
    videos: 0,
    photos: 0,
    episodes: 0,
    releaseDate: '',
    trailerUrl:''
  });
  const handleInputChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };
  const handleFormChange = (updatedImages) => {
    setFormData({
      ...formData,
      cast: updatedImages,
    });
  };
  const handleSubmit=async()=>{
    const userId=localStorage.getItem("e")
    if(userId){
      try {
        if(formData.title===""||formData.image===""||formData.releaseDate===""||formData.description===""||formData?.cast.length===0){
          toast.warn("title, description,releaseDate, image url are reuired ")
        } else{
          await mutate(formData); // This will call submitFormData function
          toast.success('Movie created successfully');
        }
       
      } catch (error) {
        console.error('Form submission failed:', error.message);
      }
    } else{
      toast.warn("You need to login first")
    }
    
  }
  return (
    <div className='w-[90%] p-3'>
      <div className='flex items-center flex-row'>
      <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Movie Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      onChange={(e) => handleInputChange(e, 'title')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2 ml-1">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Movie Image Url
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      onChange={(e) => handleInputChange(e, 'image')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
      </div>
      
                  <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                  Description
                  </label>
                  <textarea
                    rows={6}
                    onChange={(e) => handleInputChange(e, 'description')}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >

                  </textarea>
                </div>
                <h2 className="text-xl font-semibold mb-4">Movie Cast</h2>
                <ImageInput onChange={handleFormChange} />
      <div className='flex items-center flex-row'>
      <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                     Movie Creator
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                    onChange={(e) => handleInputChange(e, 'creator')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2 ml-1">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Videos
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your first name"
                      onChange={(e) => handleInputChange(e, 'videos')}

                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
      </div>
      <div className='flex items-center flex-row'>
      <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Photes
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your first name"
                      onChange={(e) => handleInputChange(e, 'photos')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2 ml-1">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Episodes
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your first name"
                      onChange={(e) => handleInputChange(e, 'episodes')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
      </div>
      <div className='flex items-center flex-row'>
      <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Movie Trailer Url
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      onChange={(e) => handleInputChange(e, 'trailerUrl')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2 ml-1">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Release Date
                    </label>
                    <input
                      type="date"
                      placeholder="Enter your first name"
                      onChange={(e) => handleInputChange(e, 'releaseDate')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
      </div>

                  <button className='w-[30%] bg-black m-3 p-3 text-white rounded-md' onClick={handleSubmit}>
                   {
                    isLoading?
                    <Loader size={20}/>:
                    <p>Submit</p>
                   } 
                  </button>
    </div>
  )
}

export default MovieEditor