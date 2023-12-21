import React from 'react'

const MovieTitle = ({title1,title2}) => {
  return (
    <div className='flex items-center flex-row py-10'>
       <h1 className="text-3xl font-bold  leading-tight tracking-widest text-[#0369A0]" >{title1}</h1>
       <h1 className="text-3xl font-bold text-[yellow] ml-1">{title2}</h1>
    </div>
  )
}

export default MovieTitle