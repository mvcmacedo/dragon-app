import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import AddButton from './components/AddButton';

import GlobalStyle from './styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <AddButton />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
