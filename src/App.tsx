import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaTwitter } from "react-icons/fa";
import { Tab } from './components/Tab';

function App() {
  return (
    <div className="App">
      <header>
          <h2 className='logo-title'>
              OH SHXX PIRATES
          </h2>
          <div className='sns'>
          <FaTwitter className='twitter'/>
          </div>
      </header>

      <Tab />


    </div>
  );
}

export default App;
