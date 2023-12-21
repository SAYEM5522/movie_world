import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = ({size}) => {
  return (
    <div>
      <CircularProgress  size={size} />
    </div>
  )
}

export default Loader