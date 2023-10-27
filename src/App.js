import React from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home';
import Wallet from './wallets';


function App() {
  return (
      <>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/wallet" element={<Wallet />} />
        


        

          
            
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
