import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { baseURL } from "../constants";
import HomeContext from "../Home/HomeContext";
import "./Banner.css";

function Banner() {
  const [imageSize, setImageSize] = useState("w780");
  const { bannerData, index, data } = useContext(HomeContext);
  const currentData = bannerData && bannerData.length > 0 ? bannerData : data;
  console.log("data in banner:", index, currentData);

  const path = currentData[index]?.backdrop_path;

  const url = path ? `${baseURL}/api/image?path=${path}&size=${imageSize}` : "";
  console.log("url", url);
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setImageSize("w300");
      } else if (width < 1024) {
        setImageSize("w780");
      } else {
        setImageSize("w1280");
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [imageSize]);

  return (
    <div
      className="h-75 sm:h-195 "
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="banner-title">{currentData[index]?.title}</h1>
      <h2 className="banner-description">{currentData[index]?.overview}</h2>
      <div className="banner-buttons">
        <button className="banner-button play-button">Play</button>
        <button className="banner-button info-button">More Info</button>
      </div>
    </div>
  );
}

export default Banner;
