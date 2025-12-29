import React, { useContext,useState } from "react";
import "./Poster.css";
import axios from "../Axios";
import "@fontsource/oswald/700.css";
import "@fontsource/oswald/400.css";
import { baseURL, imageBaseURL } from "../constants";
import HomeContext from "../Home/HomeContext";

function Poster() {
  const trendingMovies = useContext(HomeContext);
  let { path, size = "original" } = "";
  let url = ""; 
  const [id,setId]=useState(0);
  if(typeof id ===undefined){
    setId(0);
  }
  if (trendingMovies && trendingMovies.length > 0) {
    console.log("data in poster:", trendingMovies);
    path = trendingMovies[id].backdrop_path;
    url = `${baseURL}/api/image?path=${path}&size=${size}`;

    console.log("url", url);
  }

  return (
    <div>
      <div
        className="banner"
        style={{ backgroundImage: `url(${url})`}}
      >
        <h1 className="banner-title">
          {trendingMovies && trendingMovies.length > 0
            ? trendingMovies[id].title
            : ""}
          .
        </h1>
        <h2 className="banner-description">
          {trendingMovies && trendingMovies.length > 0
            ? trendingMovies[id].overview
            : ""}
        </h2>
        <div className="banner-buttons">
          <button className="banner-button play-button">Play</button>
          <button className="banner-button info-button">More Info</button>
        </div>
      </div>

      <div className="posters-container">
        {trendingMovies
          ? trendingMovies.map((movie,index) => (
              <img 
                key={movie.id}
                className="poster" onClick={()=>{
                  setId(index);
                }}
                src={
                  baseURL +
                  imageBaseURL +
                  "?path=" +
                  movie.poster_path +
                  "&size=w185"
                }
                alt="poster"
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Poster;
