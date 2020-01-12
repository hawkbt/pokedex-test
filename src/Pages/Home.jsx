import React from 'react'
import {Grid, Container, makeStyles, Card, CardContent, Typography, CardActionArea, CardMedia} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
  card: {
    display: 'flex',
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  id: {
    fontWeight: "bold"
  },
  cover:{
    // width: `calc(${this.width}-50%)`
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <Container fixed >
      <Grid  container direction="row" justify="flex-start" alignItems="center" spacing={1}>
        <Grid container item xs={12} sm={12}  md={4} lg={3} spacing={2}>
          <CardActionArea>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component='span' variant='span'>
                    #001
                  </Typography>
                  <Typography component='h5' variant='h5'>
                    Bulbasaur
                  </Typography>
                </CardContent>
                <CardMedia
                  className={classes.cover}
                  image='https://pokeres.bastionbot.org/images/pokemon/1.png'
                  title="bulbasaur"
                />
              </div>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid container item xs={12} xs={12} sm={12}  md={4} lg={3} spacing={2}>
          {/* <FormRow /> */} hola 2
        </Grid>
        <Grid container item xs={12} xs={12} sm={12}  md={4} lg={3} spacing={2}>
          {/* <FormRow /> */}
          hola 3
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
