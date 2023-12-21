import React from 'react'

const MiddleFooter = () => {
  return (
    <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-semibold text-white">Additional Pages</h3>
        <ul className="flex flex-col space-y-2 text-white">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
  )
}

export default MiddleFooter