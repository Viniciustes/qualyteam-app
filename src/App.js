import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './pages/routes';
import history from './pages/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
