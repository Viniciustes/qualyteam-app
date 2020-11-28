import React from 'react';
import Routes from './pages/routes';
import AppProvider from './context/appContext';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
}

export default App;
