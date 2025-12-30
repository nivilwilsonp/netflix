import React, { useContext,useState } from "react";
import "./Poster.css";
import axios from "../Axios";
import "@fontsource/oswald/700.css";
import "@fontsource/oswald/400.css";
import { baseURL, imageBaseURL } from "../constants";
import HomeContext from "../Home/HomeContext";
import ActionContext from "../Home/ActionCotext";
import e from "cors";
import { trendingEndpoint, actionEndpoint ,comedyEndpoint,horrorEndpoint,romanceEndpoint,documentaryEndpoint} from "../constants";  

function Poster({ title, data, setIndex }) {

  const { setBannerData } = useContext(HomeContext);

  


  return (
    <div className="posters-container">
    <h1>{title} on Netflix</h1>

      <div >
        {data
          ? data.map((movie,index) => (
            
              <img 
                key={movie.id}
                className="poster" onClick={()=>{
                  setBannerData(data);
                  setIndex(index);
                  window.scrollTo({ top: 0, behavior: "smooth" });
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
