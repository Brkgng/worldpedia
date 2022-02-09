import React from 'react';
// Components
import Home from './pages/Home/Home';
// Styles
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';

const App: React.FC = () => {
  return (
    <Container>
      <Home />
      <GlobalStyle />
    </Container>
  );
};

export default App;
