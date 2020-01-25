import React, { useState, useEffect } from 'react';
import { useStyles } from './../styles/container';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core';

const Container = () => {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [locationSearched, setLocationSearched] = useState('Atlanta');
  const API_KEY =
    'HPaQDqBJs7cav7qVjZ0OJwwIRwZXwf4--f6XOIGUrcOZzLYZOZCe1rYz7pxD_o9UnNZAmq6Bowavniy4dSn7I8QhfYTR4kblUBsb4pxub5fcXMXvPz64tpaEUKYrXnYx';

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${locationSearched}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`
          },
          params: {
            categories: 'breakfast_brunch'
          }
        }
      )
      .then(res => setState(res.data.businesses[0].name))
      .catch(err => console.log('error'));
  });

  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <FormControl style={{ width: '80%' }}>
          <InputLabel>Where do you want to eat?</InputLabel>
          <Input></Input>
          <FormHelperText>Not at my house</FormHelperText>
        </FormControl>
        <h1>{state}</h1>
      </div>
    </div>
  );
};

export default Container;
