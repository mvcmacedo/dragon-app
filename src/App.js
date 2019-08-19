import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import AddButton from './components/AddButton';

import { isAuthenticated } from './services/auth';

import GlobalStyle from './styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      { isAuthenticated() && <AddButton /> }
      <Routes />
    </BrowserRouter>
  );
}

export default App;
