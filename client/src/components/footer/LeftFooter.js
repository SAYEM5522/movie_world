import React from 'react'

const LeftFooter = () => {
  return (
    <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-semibold text-white">Upcoming Movies</h3>
        <ul className="flex flex-col space-y-2 text-white">
          <li >JAWAN</li>
          <li>The Vampire Diaries</li>
          <li>Barbie</li>
          <li>Teen Wolf</li>
          <li>NCIS</li>
        </ul>
      </div>
  )
}

export default LeftFooter