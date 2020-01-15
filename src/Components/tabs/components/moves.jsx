import React from 'react'

const Moves = ({moves}) => {
  return (
    <div>
        {moves.map( (move,index) => {
          return(
            <>
              <span key={move.move.name + index}>Name: {move.move.name}</span>
              <br/>
            </>
          )
        })}
    </div>
  )
}

export default Moves
