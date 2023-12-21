import React from 'react'

const Cast = ({data}) => {
  return (
    <div className='my-10'>
      <div className='flex items-end flex-row'>
        <p className='text-white font-bold text-2xl'>Top</p>
        <p className='text-[#0369A0] font-bold text-2xl'>Cast</p>
      </div>
      <div className='p-5 flex flex-row items-center'>
        {
          data?.map((item,index)=>{
            return(
              <div key={index} className='w-[200px] p-1 h-[100px] flex flex-row items-start rounded-lg bg-[#13181C]'>
              <img className='w-[60px] h-[60px] object-cover rounded-[50%]' src={item?.image}/>
              <p className='text-white font-medium font-serif ml-2'>{item?.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cast