import React from 'react'
// Pages
import Home from './pages/Home/Home'
import Countries from './pages/Countries/Countries'
import Country from './pages/Countries/Country/Country'
import Quiz from './pages/Quiz/Quiz'
import NotFound from './pages/NotFound/NotFound'
// Styles
import { GlobalStyle } from './GlobalStyle'
import { Container } from './App.styled'
// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:id" element={<Country />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </Container>
  )
}

export default App
