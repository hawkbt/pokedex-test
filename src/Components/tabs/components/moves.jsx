import React from 'react'

const Moves = ({moves}) => {
  return (
    <div>
        {moves.map( move => {
          return(
            <>
              <span key={move.move.name}>Name: {move.move.name}</span>
              <br/>
            </>
          )
        })}
    </div>
  )
}

export default Moves
