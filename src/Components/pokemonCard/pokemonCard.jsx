import React from 'react'
import {Grid, Box, makeStyles, Card, CardContent, Typography, CardActionArea, CardMedia} from '@material-ui/core'
import { setColor, setId } from '../../Utils/functions'
import {Link} from 'react-router-dom'
import { PokemonType } from '../pokemonType/pokemonType'

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
    fontSize: 19,
    color: 'rgba(0, 0, 0, 0.2)',
  },
  picture:{
    position: 'relative',
    width: '70%',
    paddingTop: '65%',
    alignItems: 'center',
    display: 'flex',
  },
  cover:{
    width: '100%',  
    position: 'absolute',
    top: '2vh',
    left: 0,
    bottom: 0,
    right: 0,
    [theme.breakpoints.between('xs',380)]:{
      top: '4vh'
    }
  },
  name:{
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginTop: '20px',
    fontSize: '1.5rem',
    textTransform: 'capitalize',
  },
  link: {
    width: '100%',
    textDecoration: 'none !important'
  }
}))

const PokemonCard = ({pokemon}) => {
  const classes = useStyles()
  return (
    <Grid container item xs={12} sm={12}  md={6} lg={6}>
      <CardActionArea>
        <Card className={classes.card} style={{background: setColor(pokemon.type)}}>
          <Link to={`/pokemon/${pokemon.id}`} className={classes.link}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Box className={classes.id} component='span'>{setId(pokemon.id)}</Box>
                <Typography className={classes.name} component='h5' variant='h5'>
                  {pokemon.name}
                </Typography>
                <PokemonType types={pokemon.types} />
              </CardContent>
              <Box component='div' className={classes.picture}>
                <CardMedia
                  className={classes.cover}
                  component='img'
                  // heigth='140'
                  alt={pokemon.name}
                  image={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                  title={pokemon.name}  
                />
              </Box>
            </div>
          </Link>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default PokemonCard
