import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes ,Route } from 'react-router-dom';
import './App.css';
import HeaderElement from './components/homePage/frontpage';
import Pricing from './components/pricing';
import QuestionAsking from './components/QuesAsking/questionAsking';
import AboutUs from './components/HeaderRouts/AboutUs'
import Login from './components/HeaderRouts/Login';
import Services from './components/HeaderRouts/Services';
import Contact from './components/HeaderRouts/Contact';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderElement/>}/>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/questions" element={<QuestionAsking/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Contact' element={<Contact/>}/>

        </Routes>
     </BrowserRouter>
  );
}

export default App;
