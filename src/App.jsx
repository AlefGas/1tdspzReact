import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import React, { useState } from 'react';
import { Container,Button,lightTheme,darkTheme } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';
import Cep from './pages/Cep';

import Techemergentes from './pages/techemergentes';

function App() {
  const [theme,setTheme]= useState('light')
  const mudarTheme = () => {
      setTheme(mudar => mudar === 'light'? 'dark' : 'light')
  }
  return (
    <>
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
     <h1>TECH EMERGENTES </h1>
    <Button onClick={mudarTheme}>BOTÃO</Button>
    <hr/>
    <Container>
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/sobre' element={<Sobre />} />
                          <Route path='/cep' element={<Cep />} />
                          <Route path='/techemergentes' element={<Techemergentes />} />
                    </Routes>
                  </BrowserRouter>
    </Container>
    </ThemeProvider>
    </>
  );
}
export default App;