import React from 'react'
import AddedList from './AddedList'
import MovieTitle from '../movies/MovieTitle'

const Added = () => {
  return (
    <div className='bg-black'>
      <div className='flex items-center justify-center'>
      <MovieTitle title1={"MY ADDED"} title2={"MOVIES"}/>
      </div>
      <AddedList/>
    </div>
  )
}

export default Added