import React from 'react'
import UpcomingTitle from './UpcomingTitle'
import UpcomingList from './UpcomingList'

const Upcoming = () => {
  return (
    <div style={{backgroundImage:"linear-gradient(to right, #06111A, rgba(0, 0, 0, 1))"}} className='py-5 '>
      <UpcomingTitle/>
      <UpcomingList/>
    </div>
  )
}

export default Upcoming