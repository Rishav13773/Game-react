import React, { useState } from 'react';
import wd from '../Images/Wd.png';
import genre from '../Images/genre.png'
import release from '../Images/release.png'
import platform from '../Images/platform.png'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DARK } from '../redux/actions/action';




const DetailPage = () => {

  const getData = useSelector((state => state.gamereducer.games))
  const history = useNavigate();
  const getDarkMode = useSelector((state => state.darkreducer.darks));
  console.log(getDarkMode);

  const handleBtn = () => {
    history('/search')
  }

  const handleDarkMode = (event) => {
  }

  return (
    <body style={{backgroundColor: getDarkMode ? 'black': 'rgb(245, 245, 245)'}}>
      <>
        
        <div className='container '>
          <div className='detailWrap'>
            {
              getData.map((ele, key) => {
                return (
                  <>
                    <div className='img-wrap'>
                      <img src={ele.thumbnail} alt="" />
                    </div>

                    <div className='right'>
                      <h1 style={{color: getDarkMode ? 'white':'black'}}>{ele.title}</h1>
                      <h4 style={{ fontSize: '15px', color: getDarkMode ? 'white':'black' }}>Release date <img style={{ width: '3%' }} src={release} alt="" /> : {ele.release_date}</h4>
                      <h4 style={{ fontSize: '15px', color: getDarkMode ? 'white':'black' }}>Genre <img style={{ width: '3%' }} src={genre} alt="" /> : {ele.genre}</h4>
                      <h4 style={{ fontSize: '15px', color: getDarkMode ? 'white':'black' }}>Platform <img style={{ width: '3%' }} src={platform} alt="" /> : {ele.platform}</h4>
                      <p style={{color: getDarkMode ? 'white':'black'}}>{ele.short_description}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className='back-btn'>
            <Button onClick={handleBtn} variant="outline-success">Go back</Button>
          </div>

        </div>
      </>
    </body>
  )
}

export default DetailPage