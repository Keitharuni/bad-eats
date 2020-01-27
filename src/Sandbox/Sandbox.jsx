import React from 'react';
import { usePosition } from './../hooks/Position';
import Geocode from 'react-geocode';

const SandBox = () => {
  Geocode.setApiKey('AIzaSyB4hefRpgwazJjAMZv_fYVTcbt6Rsj-g-g');
  const { latitude, longitude, error } = usePosition();

  Geocode.fromLatLng('35.195334900000006', '-80.7697168').then(
    res => {
      const address = res.results[0].formatted_address;
      let add = address.split(',');
      let city = add[1].trim();
      let state = add[2].slice(0, -5).trim();
      console.log(`${city}, ${state}`);
    },
    error => {
      console.log(error);
    }
  );

  return (
    <>
      <ul>
        <li>latitude: {latitude}</li>
        <li>longitude: {longitude}</li>
        <li>error: {error}</li>
      </ul>
      <h1>address</h1>
    </>
  );
};

export default SandBox;
