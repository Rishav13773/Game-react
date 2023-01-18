import React from 'react'
import icon from '../Images/icon.png'
import Button from 'react-bootstrap/Button';
import '../App.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DARK } from '../redux/actions/action';



const Main = () => {

  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
 
  let styling = {
    fontFamily: 'Microsoft New Tai lue',
    fontWeight: 'bolder',
    borderColor: darkMode ? 'white':'black',
    color: darkMode ? 'white': 'black',
    width: '17%',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: '12px'
  }

  const handleDarkMode = (event)=>{
    setDarkMode(current => !current)
    dispatch(DARK(darkMode));
    console.log(darkMode)
  }

  return (
   <body style={{backgroundColor: darkMode ? 'black': 'rgb(245, 245, 245)'}}>
      <>
      <div className='dark-mode'>
        <svg onClick={handleDarkMode} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="ic_fluent_dark_theme_24_filled" fill="#212121" fill-rule="nonzero">
              <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20 L12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z" id="🎨-Color"></path>
            </g>
          </g>
        </svg>
      </div>

      <div className='container wrapper'>
        <img src={icon} alt="" />
        <h2 style={{ color: darkMode ? 'white':'black', fontFamily: 'Microsoft New Tai lue', fontWeight: 'bolder' }}>GameStop</h2>
        <h6 style={{ color: darkMode ? 'white':'black', fontFamily: 'Microsoft New Tai lue', fontWeight: 'lighter', fontSize: '12px' }}>Simple, free, find all the latest games here and there system requirements</h6>
        <Button href='/search' style={styling} variant="outline-success">Choose a starting point</Button>
        <Button style={styling} variant="outline-success">Open dashboard</Button>
        <Button className='btn-6' style={{
          fontFamily: 'Microsoft New Tai lue',
          fontWeight: 'bolder',
          borderColor: darkMode ? 'white':'black',
          color: darkMode ? 'white': 'black',
          width: '13.8%',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: '10px'
        }} variant="outline-success">What is GameStop?</Button>
        <div style={{borderLeft: darkMode? '1px solid white':'1px solid black' }} className='vl'></div>
      </div>
    </>
    </body>
  )
}

export default Main