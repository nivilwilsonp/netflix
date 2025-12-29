import React from 'react';
import "./Poster.css";
import axios from '../Axios';
import "@fontsource/oswald/700.css";
import "@fontsource/oswald/400.css";
import { baseURL } from '../constants';

function Poster(props) {
  
  //const { path="/iN41Ccw4DctL8npfmYg1j5Tr1eb.jpg", size = "original" } = props;   
    const { path,data, size = "w1280" } = props;   
                                    

  const url = `${baseURL}/api/image?path=${path}&size=${size}`;
  

  return (

    <div
      className="poster"
      style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover' }}
    >
        <h1 className='poster-title'>{data.title}.</h1>
        <h2 className='poster-description'>{data.overview}</h2>
        <div className='poster-buttons'>
            <button className='poster-button play-button'>Play</button>
            <button className='poster-button info-button'>More Info</button>
        </div>
    </div>
  )
}

export default Poster