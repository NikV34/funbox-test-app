import React from 'react';

import './app.css';

import CardListContainer from '../card-list-container';

const App = () => {
  return (
    <div className="app">
      <div>
        <h1>Ты сегодня покормил кота?</h1>
        <CardListContainer />
      </div>
    </div>
  )
}

export default App;