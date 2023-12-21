import React from 'react'
import DetailsBanner from './DetailsBanner'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Cast from '../cast/Cast';
import Footer from '../footer/Footer';
import { ToastContainer } from 'react-toastify';
import Loader from '../authentication/Loader';
const fetchData = async (movieId) => {
  
  const response = await fetch(`https://movie-orld.onrender.com/movie/movies/${movieId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
const DetailsPage = () => {
  const {movieId}=useParams()
  const { data, error, isLoading } = useQuery(['myData', movieId], () => fetchData(movieId));
  console.log(data)
  return (
    <div style={{backgroundImage:"linear-gradient(to right, #06111A, rgba(0, 0, 0, 1))"}} >
      {
        isLoading?
        <div className='flex items-center justify-center'>
        <Loader size={40}/>
        </div>:
         <div className='w-[80%] mx-auto'>
        
         <DetailsBanner  data={data?.Movies} totalR={data?.totalRatings} avgR={data?.avgRating} />
        <Cast data={data?.Movies?.cast}/>
         </div>
      }
     
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
      />
     <Footer/>
    </div>
  )
}

export default DetailsPage