import React from 'react'
import { makeStyles, AppBar, Tabs, Tab, useTheme, Container, Box, Typography } from '@material-ui/core';
import TabPanel from './components/tabPanel';
import { setAbilities } from '../../Utils/functions';
import Stats from './components/stats';
import Sprites from './components/sprites';
import Moves from './components/moves';

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '32px',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 40vh)'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column wrap',
    justifyContent: 'space-between'
  },
}));

const TabsInfo = ({data}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Container>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Base Stats" {...a11yProps(1)} />
            <Tab label="Moves" {...a11yProps(2)} />
            <Tab label="Sprites" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box component='div' className='infoContainer'>
            <Box component='div'>
              <Typography component='h6' variant='h6'>Height: {data.weight}</Typography>
              <Typography component='h6' variant='h6'>Weight: {data.height}</Typography>
              <Typography component='h6' variant='h6'>Abilities: {setAbilities(data.abilities || [])}</Typography>
              <Typography component='h6' variant='h6'>Base Experience: {data.base_experience}</Typography>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Stats type={data.type} stats={data.stats}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Moves moves={data.moves || []}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Sprites sprites={data.sprites || {}} />
        </TabPanel>
      </div>
    </Container>
  )
}

export default TabsInfo
