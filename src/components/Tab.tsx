import { useState } from 'react';
import styled from 'styled-components';
import AboutContent from '../AboutContent'

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

  .submenu {
    ${'' /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height : 34px;
    padding : 18px 25px;
    font-size : 15px;
    font-family: "AmericanScribe"
  }

  .focused {
    ${'' /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
    background-color: rgba(0,0,0,0.6);
    color : white;
    border-bottom: 4px solid white;
    transition: all 0.5s ease;
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
    // TIP: Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
    // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 입니다.
    const [currentTab,setTab] = useState(0);
  
    const menuArr = [
      { name: 'About', content: <AboutContent /> },
      { name: 'Slide', content: 'Tab menu TWO' },
      { name: 'Plan', content: 'Tab menu THREE' },
      { name: 'Tab3', content: 'Tab menu THREE' },
    ];
  
    const selectMenuHandler = (index:number) => {
      // TIP: parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않습니다
      // TODO : 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신되도록 함수를 완성하세요.
      setTab(index);
  
    };
  
    return (
      <>
        <div>
          <TabMenu>
            {/*TODO: 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정합니다.*/}
            {/*TIP: li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused' 가 되며, 
                    나머지 2개의 tab은 'submenu' 가 됩니다.*/}
  
           {menuArr.map( (tap,index) => {
               return (
               <li key={index} className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}>{tap.name}</li>
               )
            })}
          </TabMenu>
          <Desc>
            {/*TODO: 아래 하드코딩된 내용 대신에, 현재 선택된 메뉴 따른 content를 표시하세요*/}
            <p>{menuArr[currentTab].content}</p>
          </Desc>
        </div>
      </>
    );
  };