import React from 'react'
import { CircularProgress } from '@material-ui/core';

const style = {
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '40px',
  heigth: '100px',
  boxSizing: 'border-box'
}

const LoadingData = () => {
  return (
    <div style={style}>
      <CircularProgress size={40}/>
    </div>
  )
}

export default LoadingData
