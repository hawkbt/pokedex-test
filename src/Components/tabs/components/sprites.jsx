import React from 'react'
import { setSpriteName } from '../../../Utils/functions'
import { Grid } from '@material-ui/core'

const Sprites = ({sprites}) => {
  return (
    <Grid  spacing={3} container direction="row" justify="flex-start" alignItems="center" >
      {Object.keys(sprites || {}).map( (sprite, index) => {
        if (sprites[sprite] !== null)
          return(
            <Grid container item xs={12} sm={12}  md={3} lg={4} key={`${sprite}${index}`}>
              <h5>{setSpriteName(sprite)}</h5>
              <img src={sprites[sprite]} alt={`${sprite}${index}`} width='100'/>
            </Grid>
          )
        return null
        })}
    </Grid>
  )
}

export default Sprites
