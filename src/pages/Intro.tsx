import React, { useState} from 'react';
import './Intro.css';


interface IntroPageProps {
    onSkip: () => void; // 인트로 넘기기 이벤트를 위한 함수
  }

const Intro: React.FC<IntroPageProps> = ({ onSkip }) => {
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(true);
        setTimeout(onSkip, 500);
    }

  return (
    <div className={`intro-page ${animate ? 'page-turn' : ''}`} onClick={handleClick}>
        <h1 className="logo">
            <img src="/images/dream.png" alt="logo_title" />
        </h1>
        <div className="main-image">
            <img src="/images/logo_1.png" alt="logo_1.png" />
        </div>

    </div>
  );
}

export default Intro;
