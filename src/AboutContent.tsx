import React, { useState } from "react";
import "./AboutContent.css"

const HomePage: React.FC = () => {
  // 여기에는 HomePage 컴포넌트의 내용이 들어갑니다.
  // 예를 들어, 이미지, 팝업 링크 등이 포함될 수 있습니다.

  const [aboutPopupVisible, setAboutPopupVisible] = useState<boolean>(false);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  return (
   <>
    <section className="about-container">
        <div className="about">
          <img src="/images/1220bg concept.png" alt="about-img" />
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
            <li><img src="" alt="dum" /><h4>DUM</h4></li>
            <li><img src="" alt="dum" /><h4>DUMMER</h4></li>
        </ul>

      </div>
    </section>
    <section className="about-container">
    <h2>FAQ</h2>
    </section>
   </>
  );
};

export default HomePage;