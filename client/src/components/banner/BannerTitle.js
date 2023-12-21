import React, { memo } from 'react'

const BannerTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center    rounded-lg p-8">
      <h1 className="text-6xl font-bold  leading-tight tracking-widest text-[#0369A0]">BEST WAY OF</h1>
      <h2 className="text-6xl font-semibold text-[#0369A0] mt-4">ENTERTAINMENT</h2>
      <p className="text-2xl text-gray-300 mt-4">MOVIES AS YOU DEMAND AT USD</p>
      <p className="text-xl font-bold text-[yellow] mt-2">10/MONTH</p>
    </div>
  )
}

export default memo(BannerTitle)