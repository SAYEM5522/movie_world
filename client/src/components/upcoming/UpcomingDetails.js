import React from 'react'

const UpcomingDetails = ({index,activeIndex,item}) => {
  return (
    <div>
      <img
            className={`rounded-xl ${
              index === activeIndex ? 'transform border-[3px] border-[blue] scale-110 rounded-xl transition-transform duration-500 ease-in-out' : ''
            }`}
            src={item?.image}
            alt={item?.title}
          />
    </div>
  )
}

export default UpcomingDetails