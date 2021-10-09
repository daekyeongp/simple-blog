/* esLint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [맛집, 맛집수정] = useState(['송파구 맛집', '강동구 맛집', '광진구 맛집']);
  let [number, setNumber] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); // 모달창을 켜고 닫는 스위치
  let [맛집넘버, 맛집넘버수정] = useState(0);
  let [입력, 입력수정] = useState('');

  function 맛집추가() {
    let 뉴맛집 = [...맛집];
    let 뉴뉴넘버 = [...number];
    뉴맛집.unshift(입력);
    뉴뉴넘버.unshift(0);
    맛집수정(뉴맛집);
    setNumber(뉴뉴넘버);
  }

  function numberUp(i) {
    let 뉴넘버 = [...number];
    뉴넘버[i] = 뉴넘버[i] + 1;
    setNumber(뉴넘버);
  }

  return (
    <div className="App">
      <div className="navbar">
        Dekay Blog
      </div>
      { 
        맛집.map(function(맛집, i) {
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=> { 맛집넘버수정(i) } }>{맛집} <span onClick={ ()=>{ numberUp(i) }}>👍</span> {number[i]} </h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div> 
          )
        }) // JSX: for 문
      }

      <div className="publish">
        <input onChange={ (e)=>{ 입력수정(e.target.value) } }/>
        <button onClick={ ()=> { 맛집추가() } }>저장</button>
      </div>

      <button onClick= { ()=>setModal(!modal) }>열고닫기버튼</button>

      {
        modal === true
        ? <Modal 맛집={맛집} 맛집넘버={맛집넘버}/> // ??=?? {작명=전송할state}
        : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{ props.맛집[props.맛집넘버] }</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;
