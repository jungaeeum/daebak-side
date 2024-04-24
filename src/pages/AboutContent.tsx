import React, { useState } from "react";
import "./AboutContent.css"
import { PiNumberOneFill, PiNumberTwoFill, PiNumberThreeFill, PiNumberFourFill, PiNumberFiveFill } from "react-icons/pi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const AboutContent: React.FC = () => {
  
  interface AboutFaqVisible {
    [key: number]: boolean;
  }

  const [aboutFaqVisible, setAboutFaqVisible] = useState<AboutFaqVisible>({ 0: false, 1: false, 2: false, 3: false, 4: false });
  // const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  
  const toggleContent = (key:number) => {
    setAboutFaqVisible({

      ...aboutFaqVisible, 
      [key]: !aboutFaqVisible[key], // 현재 상태의 반대값으로 설정

    });
  };

  return (
   <>
    <section className="about-container">
        <div className="about">
          <picture>
          <img src="/images/1220bg concept.png"  loading="lazy" alt="about-img" />
          </picture>
          <div className="subscription">

          <h2>About</h2>
          <p>Now, LISTEN UP! MATEY! </p>
            
            <p>Who are the ohshxxpirates? We're the most free outlaws ever. You can do anything you want and be whoever you want to be.</p> 
            <br/>
            <p>If you want to be a brave pirate, follow us. You'll be surprised, and we have members only special benefits for you. We're waiting for you. </p>
            <p>Let's go on an adventure together!</p>

          </div>
        </div>
    </section>
    <section className="about-container">
      <div className="team">
        <h2>Team</h2>
        <ul className="profile-container">
            <li>
              <div className="circle">
              <img src="/images/0105 로고.png" alt="dum" />
              </div>
              <h4>DUM</h4>
            </li>
            <li>
              <div className="circle">
              <img src="/images/로고1228_2.png" alt="dum"/>
              </div>
              <h4>DUMMER</h4>
              </li>
        </ul>
      </div>
    </section>
    <section className="about-container">
    <h2>FAQ</h2>
    <ul className="faq-list">
      <li>
        <div className="select-title" onClick={() => toggleContent(0)}>
      <PiNumberOneFill className="pinumber"/>
      <h2 className="question">When to mint?</h2>
      {aboutFaqVisible[0] ? <IoMdArrowDropup className="dropdown"/> :<IoMdArrowDropdown className="dropdown"/> }
        </div>
        {aboutFaqVisible[0] && 
      <ul className="sub-faq-content">
        <li>
          <p>When? Minting is just around the corner. Drop everything and wait. We know you're always waiting for what's next.</p>
        </li>
      </ul>
        }
      </li>
      <li>
        <div className="select-title" onClick={() => toggleContent(1)}>
      <PiNumberTwoFill className="pinumber"/>
      <h2 className="question">What are you guys doing with NFTs?</h2>
      {aboutFaqVisible[1] ? <IoMdArrowDropup className="dropdown"/> :<IoMdArrowDropdown className="dropdown"/> }
        </div>
        {aboutFaqVisible[1] && 
      <ul className="sub-faq-content">
        <li>
          <p>Are you Octopus? We're pirates NFTs! If you want them, we'll give them to you. But show you what you can do.</p>
        </li>
      </ul>
        }
      </li>
      <li>
        <div className="select-title" onClick={() => toggleContent(2)}>
      <PiNumberThreeFill className="pinumber"/>
      <h2 className="question">What's in it for me?</h2>
      {aboutFaqVisible[2] ? <IoMdArrowDropup className="dropdown"/> :<IoMdArrowDropdown className="dropdown"/> }
        </div>
        {aboutFaqVisible[2] && 
      <ul className="sub-faq-content">
        <li>
          <p>benefits? You're really asking? We only give them to the OUR MATEY! Invitations to special events, and even better things. You want to see something amazing? Join us and you'll get it.</p>
        </li>
      </ul>
        }
      </li>
      <li>
        <div className="select-title" onClick={() => toggleContent(3)}>
      <PiNumberFourFill className="pinumber" />
      <h2 className="question">Who are you?</h2>
      {aboutFaqVisible[3] ? <IoMdArrowDropup className="dropdown"/> :<IoMdArrowDropdown className="dropdown"/> }
        </div>
        {aboutFaqVisible[3] && 
      <ul className="sub-faq-content">
        <li>
          <p>A? We're not just a quiet company. We'll fight, we'll win, we'll get what we want</p>
        </li>
      </ul>
            }
      </li>
      <li>
        <div className="select-title" onClick={() => toggleContent(4)}>
      <PiNumberFiveFill className="pinumber"/>
      <h2 className="question">What's your goal?</h2>
      {aboutFaqVisible[4] ? <IoMdArrowDropup className="dropdown"/> :<IoMdArrowDropdown className="dropdown"/> }
        </div>
        {aboutFaqVisible[4] && 
      <ul className="sub-faq-content">
        <li>
          <p>Avast! Avast! Avast! We're pirates! We do what we want and take what we want! </p>
        </li>
      </ul>
}
      </li>
    </ul>
    </section>
   </>
  );
};

export default AboutContent;