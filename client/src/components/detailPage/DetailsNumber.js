import React from 'react'

const DetailsNumber = ({videos,photos,episodes}) => {
  return (
    <div className='flex items-start flex-col'>
      <div className='flex items-center flex-row '>
      <p className="text-xl font-bold uppercase  leading-tight tracking-widest text-white">episodes</p>
      <h2 className="text-xl font-bold text-[yellow] ml-3 ">{episodes}</h2>
      </div>
      <div className='flex items-center flex-row '>
      <p className="text-xl font-bold uppercase  leading-tight tracking-widest text-white">videos</p>
      <h2 className="text-xl font-bold text-[yellow] ml-3 ">{videos}</h2>
      </div>
      <div className='flex items-center flex-row '>
      <p className="text-xl font-bold uppercase  leading-tight tracking-widest text-white">photos</p>
      <h2 className="text-xl font-bold text-[yellow] ml-3 ">{photos}</h2>
      </div>
    </div>
  )
}

export default DetailsNumber