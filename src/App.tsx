import React, { useState } from 'react';

import './App.css';
import { FaTwitter } from "react-icons/fa";
import { Tab } from './components/Tab';
import { SiLinktree } from "react-icons/si";
import Intro from './pages/Intro';

function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  const skipIntro = () => {
    // 인트로를 넘기고, 로컬 스토리지에 이를 기록함
    setShowIntro(false);

  };

  return (
    <div className="App">
      {showIntro ? (
          <Intro onSkip={skipIntro}/>
      ) : (
      <>
      <header>
          <h2 className='logo-title'>
              OH SHXX PIRATES
          </h2>
          <div className='sns'>
          <FaTwitter className='twitter' onClick={() => window.open('https://twitter.com/ohshxxpirates', '_blank')}/>
          <SiLinktree className='twitter' onClick={() => window.open('https://linktr.ee/ohshxxpirates', '_blank')}/>
          </div>
      </header>
      <Tab />
      </>
      )}
    </div>
  );
}

export default App;
