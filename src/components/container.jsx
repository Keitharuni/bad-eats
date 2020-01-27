import React, { useState, useEffect } from 'react';
import { useStyles } from './../styles/container';
import { usePosition } from './../hooks/Position';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from '@material-ui/core';

const Container = () => {
  const classes = useStyles();
  const { latitude, longitude, error } = usePosition();
  const [resData, setResData] = useState([]);
  //make locationSearched a field
  const [locationSearched, setLocationSearched] = useState('');
  const [buttonSearch, setButtonSearch] = useState(false);
  const API_KEY =
    'HPaQDqBJs7cav7qVjZ0OJwwIRwZXwf4--f6XOIGUrcOZzLYZOZCe1rYz7pxD_o9UnNZAmq6Bowavniy4dSn7I8QhfYTR4kblUBsb4pxub5fcXMXvPz64tpaEUKYrXnYx';

  useEffect(() => {
    axios
      .get(
        `https://secret-beyond-75224.herokuapp.com/https://api.yelp.com/v3/businesses/search`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`
          },
          params: {
            //make this category a field or selector
            categories: 'breakfast_brunch',
            price: 1,
            latitude: latitude,
            longitude: longitude
          }
        }
      )
      .then(res => setResData(Object.values(res.data.businesses)))
      .catch(err => console.log('error'));
  }, [buttonSearch]);

  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <h1
          style={{
            alignSelf: 'center',
            textShadow: '0 3px 5px rgb(119, 139, 212, 0.3)'
          }}>
          Welcome to Bad Eats
        </h1>
        <FormControl submit style={{ width: '80%' }}>
          <InputLabel>What city would you like to dine in?</InputLabel>
          <Input
            onKeyPress={e => {
              if (e.key === 'Enter') {
                setButtonSearch(!buttonSearch);
                e.preventDefault();
              }
            }}
            onChange={e => setLocationSearched(e.target.value)}
            value={locationSearched}></Input>
          <FormHelperText>Not at my house</FormHelperText>
          <Button
            variant='contained'
            onClick={() => setButtonSearch(!buttonSearch)}>
            Search for Breakfast
          </Button>
          <Button>Use Current Location?</Button>
        </FormControl>
        <div
          style={{
            display: 'flex',
            textShadow: '0 3px 5px rgb(119, 139, 212, 0.3)'
          }}></div>

        <ul>
          {resData.map(st => (
            <li>
              {st.name}
              <ul>
                <li>
                  {st.rating} Stars {st.price}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Container;
