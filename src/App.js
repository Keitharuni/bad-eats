import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/container';
import Sandbox from './Sandbox/Sandbox';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Container />
      </Route>
      <Route exact path='/test'>
        <Sandbox />
      </Route>
    </Switch>
  );
}

export default App;
