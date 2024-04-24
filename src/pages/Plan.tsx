import React, { useState } from "react";
import "./Plan.css"


const Plan: React.FC = () => {
    // 여기에는 HomePage 컴포넌트의 내용이 들어갑니다.
    // 예를 들어, 이미지, 팝업 링크 등이 포함될 수 있습니다.
    interface AboutFaqVisible {
      [key: number]: boolean;
    }
  
    const [aboutFaqVisible, setAboutFaqVisible] = useState<AboutFaqVisible>({ 0: false, 1: false, 2: false, 3: false });
    // const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    
    const toggleContent = (key:number) => {
      setAboutFaqVisible({
  
        ...aboutFaqVisible, 
        [key]: !aboutFaqVisible[key], // 현재 상태의 반대값으로 설정
  
      });
    };

    return (
     <>
      <div className="plan-container">
      <h2>Map</h2>
      <div className="plans">
        <div className="box-image">
          <picture>
            <source srcSet="/images/box.webp" type="image/webp"/>
            <img src="/images/box.png" alt="frame" loading="lazy" />
          </picture>
          <picture>
            <source srcSet="/images/4.webp" type="image/webp"/>
            <img src="/images/4.png" alt="frame" loading="lazy" />
          </picture>
        </div>
        <div className="plan-description">
            <ul>
              <li className="plan-category">
                <h2 onClick={() => toggleContent(0)}>IRL Port</h2>
                {aboutFaqVisible[0] && 
                
                <ul>
                  <li><h3>Core Member Extensions</h3><p>For smooth operation, we will expand core members and operate the organization with a segmented system.</p></li>
                  <li><h3>Members Exclusive OSP store</h3><p>Member-only shop will be opened. There will be Limited Edition tees, hoodies and other goodies.</p></li>
                  <li><h3>Meet up, Festivals</h3><p>Let’s go crazy. Piracy without Rum and parties? NO FXXXING WAY!</p></li>
                  <li><h3>Piers </h3><p>We will make the community even bigger by creating Piers around the world. Pier will provide food (especially donuts) or rum or etc. Some Piers will have gym or club.</p></li>
                </ul>
                }
              </li>
              <li className="plan-category">
                <h2 onClick={() => toggleContent(1)}>Metaverse Port</h2>
                {aboutFaqVisible[1] && 
                <ul>
                  <li><h3>OSPVERSE</h3><p>Metaverse? No. We're breaking down the boundaries between reality and the metaverse. Sail with a bunch of pirates.</p></li>
                  <li><h3>Matey</h3><p>Gather the crew and Go on a voyage. Sail wherever you want to Sail, Do whatever you want to Do. That’s Pirates</p></li>
                </ul>
                }
              </li>
              <li className="plan-category">
                <h2 onClick={() => toggleContent(2)}>Community Port</h2>
                {aboutFaqVisible[2] && 
                <ul>
                  <li><h3>24 community MOD</h3><p>We will organize a 24-hour MOD so that there is no inconvenience in people using it around the world and at all times.
                          We are going to have a community service center for each country.
                  </p></li>
                  <li><h3>Always develop The Isle</h3><p>The Isle will emphasize the role we should play as the main harbor, and it will be a milestone for us to experience various things and go to other centers.</p></li>
                  <li><h3>Verification bot & Defender</h3><p>We are creating our own verification bots and defender to keep your information and assets more secure.</p></li>
                  <li><h3>Community apps</h3><p>It will continue to enable community activities anytime, anywhere. Updates, announcements, and various contents can be checked at any time and will display information about surrounding you.</p></li>
                </ul>
                  }
              </li>
              <li className="plan-category">
                <h2 onClick={() => toggleContent(3)}>Port Under Construction</h2>
                {aboutFaqVisible[3] && 
                <ul>
                  <li><h3>Crew</h3><p>You will gather a crew.</p></li>
                  <li><h3>Monkey & Parrot</h3><p>Your best friends join you on your voyage.</p></li>
                  <li><h3>Viking</h3><p>The legendary sailors who have been sleeping in the sea for centuries will rise.</p></li>
                  <li><h3>Partnerships</h3><p>Offline IP, Web2 IP will be revived as our way of Web3. We will further expand our influence through partnerships.</p></li>
                </ul>
                  }
              </li>
            </ul>
        </div>
      </div>
      </div>
     </>
    );
  };
  
  export default Plan;