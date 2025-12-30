import React from 'react'
import { useContext ,forwardRef} from 'react';
import { baseURL } from '../constants';
import HomeContext from '../Home/HomeContext';

function Banner() {
const { bannerData, setBannerData,index,data } = useContext(HomeContext);
  const currentData =
    bannerData && bannerData.length > 0 ? bannerData : data;
  console.log("data in banner:",index, currentData);
   if (!currentData || currentData.length === 0) {
    setBannerData(data);
    return <div className="banner">Loading...</div>;
  }
  const path = currentData[index]?.backdrop_path;
  const size = "original";

  const url = path
    ? `${baseURL}/api/image?path=${path}&size=${size}`
    : "";
    console.log("url", url);
  
  return (
     <div
        className="banner"
        style={{ backgroundImage: `url(${url})`}}
      >
        <h1 className="banner-title">
         {currentData[index]?.title}
        </h1>
        <h2 className="banner-description">
          {currentData[index]?.overview}
        </h2>
        <div className="banner-buttons">
          <button className="banner-button play-button">Play</button>
          <button className="banner-button info-button">More Info</button>
        </div>
      </div>
  )
}

export default Banner