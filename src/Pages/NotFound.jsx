import React from 'react'
import sadPikachu from '../Assets/images/sadPikachu.png'

const NotFound = () => {
  return (
    <div style={{height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <h1>
        Sorry Page not Found!!
        <br/>
        <b>Error 404</b>
      </h1>
      <img src={sadPikachu} width='30%' alt={'not FOund'}/>
    </div>
  )
}

export default NotFound
