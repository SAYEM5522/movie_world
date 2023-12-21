import React from 'react'
import MovieTitle from './MovieTitle'
import MovieCard from './MovieCard'
import { useQuery } from 'react-query';
import Loader from '../authentication/Loader';
const fetchData = async () => {
  const email=localStorage.getItem("e")
  const response = await fetch(`https://movie-orld.onrender.com/movie/all-rating-movies/${email}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
const Movies = () => {
  const { data, error, isLoading } = useQuery('ratingData', fetchData);
  console.log(data)
  return (
    <div style={{backgroundImage:"linear-gradient(to right, #06111A, rgba(0, 0, 0, 1))"}}>
      <div className='flex items-center justify-center'>
      <MovieTitle title1={"MOVIES YOU"} title2={"RATED"}/>
      </div>
      {
        isLoading?
        <div className='flex items-center justify-center h-full'>
        <Loader size={35}/>
        </div>
        :
      <MovieCard data={data?.ratedMovies} />
      }
    </div>
  )
}

export default Movies