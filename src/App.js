import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Portofolio from './Pages/Portofolio';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import styled from 'styled-components/macro';
import './Styles/style.scss'

const App = () => {
  return (
    <Application>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/portofolio' element={<Portofolio />} />
        <Route path="/a-propos" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Application>
  );
};

const Application = styled.div`

`;

export default App;