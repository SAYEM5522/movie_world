import React from 'react'

const AddedDetails = ({item}) => {
  return (
    <div className='relative'>
      <img
            className={`rounded-xl w-[290px] h-[330px]`}
            src={item?.image}
          />
          <div className='flex absolute top-5 right-5 mx-auto items-center bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r text-white px-4  py-2 rounded-3xl w-fit font-bold shadow-md flex-row'>
            
                  <button
              className="ml-3"
          > EDIT MOVIES
          </button>
            </div>
    </div>
  )
}

export default AddedDetails