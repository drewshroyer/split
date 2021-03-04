import './App.css';
import React from "react";
import Home from "./components/home"
// import { useState } from 'react';
import {GlobalProvider} from "./context/GlobalState"

function App() {  
  return (
    <GlobalProvider>
      <div className="App">
        <div className="website-container">  
          <Home></Home>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;