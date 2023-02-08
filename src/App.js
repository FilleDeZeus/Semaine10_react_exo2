import React from 'react'
import './App.css';
import { Inscription } from './compenents/formulaireInscription.js';
import { Connection } from './compenents/formulaireConnection';
export const App = ({  }) => {
  
  return (
    <div className="App">
      <input type="radio" id="inscription" />
      <label>Inscription</label>
      <Inscription/>
      <input type="radio" id="connection" />
      <label>Connexion</label>
      <Connection/>

    </div>
  );
}

