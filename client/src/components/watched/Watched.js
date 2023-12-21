import React from 'react'
import MovieTitle from '../movies/MovieTitle'
import MovieCard from '../movies/MovieCard'
import { useQuery } from 'react-query';
import Loader from '../authentication/Loader';
const fetchData = async () => {
  const email=localStorage.getItem("e")
  const response = await fetch(`https://movie-orld.onrender.com/movie/all-watched-movies/${email}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
const Watched = () => {
  const { data, error, isLoading } = useQuery('myWatched', fetchData);
  return (
    <div style={{backgroundImage:"linear-gradient(to right, #06111A, rgba(0, 0, 0, 1))"}}>
      <div className='ml-3'>
      <MovieTitle title1={"YOUR"} title2={"WATCH-LIST"}/>
      </div>
      {
        isLoading?
        <div className='flex items-center justify-center h-full'>
          <Loader size={35}/>
        </div>:
          <MovieCard data={data?.watchedMovies}/>

      }
    </div>
  )
}

export default Watched