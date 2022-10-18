import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import SnakeAndLadderGame from './GameComponents/SnakeAndLadderGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<SnakeAndLadderGame/> }
  </React.StrictMode>
);

reportWebVitals();