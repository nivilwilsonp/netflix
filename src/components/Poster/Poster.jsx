import React from 'react';
import "./Poster.css";
import axios from '../Axios';
import "@fontsource/oswald/700.css";
import "@fontsource/oswald/400.css";

function Poster(props) {
  const { backgroundImage} = props;

  return (

    <div
      className="poster"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <h1 className='poster-title'>Movie name.</h1>
        <h2 className='poster-description'>description</h2>
        <div className='poster-buttons'>
            <button className='poster-button play-button'>Play</button>
            <button className='poster-button info-button'>More Info</button>
        </div>
    </div>
  )
}

export default Poster