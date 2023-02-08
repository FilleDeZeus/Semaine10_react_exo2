import React from 'react'
import './App.css';
import { Inscription , Connection } from './compenents/connection/formulaire';

export const App = () => {
  return (
    <div className="App">
      <Inscription/>
      <Connection/>
    </div>
  );
}
