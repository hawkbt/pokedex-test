import React from 'react'
import {Grid, Box, makeStyles, Card, CardContent, Typography, CardActionArea, CardMedia} from '@material-ui/core'
import { setColor, setId } from '../../Utils/functions'
import {Link} from 'react-router-dom'

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
  cover:{
    display: 'block',
    margin: '10px auto',
    maxWidth: '50%',
    height: 293
  },
  name:{
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginTop: '20px',
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
  },
  link: {
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
                <Box component='div' style={{marginTop: '20px'}}>
                  <Box component='span' className={classes.type}>Grass</Box>
                </Box>
              </CardContent>
              <CardMedia
                className={classes.cover}
                component='img'
                // heigth='140'
                alt={pokemon.name}
                image={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                title={pokemon.name}  
              />
            </div>
          </Link>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default PokemonCard
