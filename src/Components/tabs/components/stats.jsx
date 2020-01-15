import React from 'react'
import { LinearProgress } from '@material-ui/core'

const Stats = ({stats, type}) => {
  return (
    <div className="stats">
      {stats.map( (s,index) => {
        return(
          <div key={s.stat.name + index}>
            <span>Name: {s.stat.name}</span><br/>
            <span>Base Stat: {s.base_stat}</span> <br/>
            <span>Effort: {s.effort}</span><br/>
            <LinearProgress variant="determinate" value={s.base_stat} />
            <br/>
          </div>
        )
      })}
    </div>
  )
}

export default Stats
