import React from "react";
import "./Slides.css"


const Slides: React.FC = () => {

    function shuffleArray(array:any) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // 요소 위치를 교환
        }
        return array;
      }

    let imageNumbers = Array.from({ length: 500 }, (_, i) => i + 1);
    imageNumbers = shuffleArray(imageNumbers);

    return (
      <div className="slide-container">
         <h2>Slide</h2>
          <div className="slider">
              <div className="slide-track">
                {imageNumbers.map((number) => (
                   <div key={number} className="slide">
                    <img src={`/images/wanted/${number}.png`} alt={`wanted ${number}`} loading="lazy" />
                   </div>
                 ))}
                {imageNumbers.map((number) => (
                    <div key={number} className="slide">
                    <img src={`/images/wanted/${number}.png`} alt={`wanted ${number}`}  loading="lazy"/>
                   </div>
                  ))}
             </div>
         </div>
         
         <div className="slider-sub">
              <div className="slide-track-left">
                {imageNumbers.map((number) => (
                   <div key={number+500} className="slide">
                    <img src={`/images/wanted/${number+500}.png`} alt={`wanted ${number}`} loading="lazy"/>
                   </div>
                 ))}
                {imageNumbers.map((number) => (
                    <div key={number+500} className="slide">
                    <img src={`/images/wanted/${number+500}.png`} alt={`wanted ${number}`} loading="lazy"/>
                   </div>
                  ))}
             </div>
         </div>
      </div>
     
    );
  };
  
  export default Slides;