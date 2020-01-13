import React from 'react'
import {Grid, makeStyles, Card, CardContent, Typography, CardActionArea, CardMedia} from '@material-ui/core'
import { setColor } from '../../Utils/functions'

const useStyles = makeStyles( theme => ({
  card: {
    display: 'flex',
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingRight: 10,
  },
  content: {
    flex: '1 0 auto',
  },
  id: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.2)',
  },
  cover:{
    display: 'block',
    margin: '10px auto',
    maxWidth: 120,
    maxHeight: 120
  },
  name:{
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textTransform: 'capitalize',
  },
  type: {
    display: 'block',
    fontSize: '12px',
    lineHeight: '19px',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    background: 'rgba(0, 0, 0, 0.2)',
    marginBottom: '5px',
    padding: '2px',
    height: '22px',
    borderRadius: '50px',
    textTransform: 'capitalize',
    width: '80%',
  }
}))

const PokemonCard = ({pokemon}) => {
  const classes = useStyles()
  return (
    <Grid container item xs={12} sm={12}  md={4} lg={3} spacing={2}>
      <CardActionArea>
        <Card className={classes.card} style={{background: setColor()}}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography className={classes.id} component='span' variant='span'>
                #001
              </Typography>
              <Typography className={classes.name} component='h5' variant='h5'>
                Bulbasaur
              </Typography>
              <Typography component='span' variant='span' className={classes.type}>
                Grass
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.cover}
              component='img'
              // heigth='140'
              alt='bulbasaur'
              image='https://pokeres.bastionbot.org/images/pokemon/1.png'
              title="bulbasaur"
            />
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default PokemonCard
