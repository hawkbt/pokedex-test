import React from 'react'
import { Typography, Box } from '@material-ui/core'

const TabPanel = ({ children, value, index, ...other }) => {

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

export default TabPanel
