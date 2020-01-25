import React from 'react';
import {useStyles} from './../styles/container';




const Container = () => {
  const classes = useStyles();

  return ( 
  
  <div className={classes.root}>
    <div className={classes.mainContainer}>
    </div>
  </div> );
}
 
export default Container;