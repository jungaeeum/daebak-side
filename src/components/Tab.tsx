import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import AboutContent from '../pages/AboutContent'
import Plan from '../pages/Plan';
// import Slides from '../pages/Slides';


const Slides = React.lazy(() => import('../pages/Slides'));


 
const TabMenu = styled.ul`
  background-color: #222222;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  cursor : pointer;  


  li {
    position: relative;
  }

  .submenu {
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height : 34px;
    padding : 18px 25px;
    font-size : 15px;
    font-family: "Seagram tfb";
    margin-bottom : 1rem;

  }

  .focused {
    background-color: rgba(0,0,0,0.6);
    color : white;
    border-bottom: 1px solid #fff;
  }



  & div.desc {
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab:React.FC = () => {
   
    const [currentTab,setTab] = useState(0);
  
    const menuArr = [
      { name: 'ABOUT', content: <AboutContent /> },
      { name: 'SLIDE', content: <Slides/> },
      { name: 'MAP', content: <Plan /> },
  
    ];
  
    const selectMenuHandler = (index:number) => {
      setTab(index);
  
    };
  
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <TabMenu>
           {menuArr.map( (tap,index) => {
               return (
               <li key={index} className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}>{tap.name}
                
                <div className="tab-slider"></div>
                
                </li>
              )
            })}
          </TabMenu>
          <Desc>
          
            <p>{menuArr[currentTab].content}</p>
          </Desc>
        </div>
      </Suspense>
    );
  };