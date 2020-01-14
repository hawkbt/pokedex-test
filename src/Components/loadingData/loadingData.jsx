import React from 'react'
import CachedIcon from '@material-ui/icons/Cached';

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
      ... <CachedIcon/> ...
    </div>
  )
}

export default LoadingData
