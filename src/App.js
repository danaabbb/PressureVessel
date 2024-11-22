import React from 'react';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'

import Page from './pages/modeling';
import { AnimatePresence } from 'framer-motion';

import './App.css';
import Calculations from './pages/calculations';

import Meetus from './pages/meetus';
import Modeling from './pages/modeling';
import PV from './pages/pv';
import {  motion } from 'framer-motion';

function App() {
  

  return (
    <Router> 
    
   
        <Routes>
          <Route path='/' element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Home /></motion.div>} />
          <Route path='/pv' element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><PV/></motion.div>} />
          <Route path='/calculations' element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Calculations /></motion.div>} />
          <Route path='/meetus' element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Meetus /></motion.div>} />
          <Route path ='/modeling' element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Modeling /></motion.div>} />
        </Routes>
   
    </Router>
  );
}

export default App;
