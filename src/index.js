import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import LanguageContext from 'Context/LanguageContext';
import PokemonContext from 'Context/PokemonContext'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <LanguageContext.Provider>
      <PokemonContext.Provider>
        <Routes />
      </PokemonContext.Provider>
    </LanguageContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
