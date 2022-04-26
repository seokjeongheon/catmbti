/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','일식맛집','돈까스 맛집']);
  let [따봉,따봉변경] = useState(0);
  
  function 변경(){
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천'
    글제목변경(newArray)
  }

  
  let posts ='석정헌 돈까스 맛집';
  // let sttt ={color : 'blue',fontSize : '30px' } 

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 변경 }>버튼</button>
      <div className='list'>
        <h3> { 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉 + 1)} } >👍</span>{따봉} </h3>
        <p>2월 9일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>2월 10일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>2월 11일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
