import React from 'react'
import './App.css';
import { Inscription } from './compenents/formulaireInscription.js';
import { Connection } from './compenents/formulaireConnection';
export const App = ({  }) => {
// let currentFormulaire = <Inscription/> 
let currentpage = false;
let conditionFormulaire = currentpage === true ? <Inscription/> : <Connection/>
  return (
    <div>
      {conditionFormulaire}
    </div>
  );
}

