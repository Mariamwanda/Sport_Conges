import { useState } from 'react'
import React from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Inscription from './pages/inscription';
import Connexion from './pages/connnexion';
import Enregistrement from './pages/Enregitrement';
import Apropos from './pages/Apropos';



import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './App.css'


function App() {
    
 return(
  <>
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Apropos' element={<Apropos/>}/>
          <Route path='/Connexion' element={<Connexion/>}/>
          <Route path='/Inscription' element={<Inscription/>}/>
          <Route path='/Enregistrement' element={<Enregistrement/>}/>
      </Routes>
  </BrowserRouter>
  </>

 )

}

export default App;