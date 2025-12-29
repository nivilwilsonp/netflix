import React, { useEffect, useState } from 'react';
import Poster from '../Poster/Poster';
import axios from 'axios';
import { baseURL, trendingEndpoint } from '../constants';
import HomeContext from './HomeContext';






function Home() {
   const[data,setData]=useState([]);
function getTrendingMovies() {
  const url = baseURL + trendingEndpoint;
    axios.get(url)
      .then((response) => {
        const results = response?.data?.results ?? [];
        console.log(results);

        if (results.length > 0) {
           console.log("getTrending Movies home:", typeof results); 
           
         setData(results);
       
         
        } else {
          console.log("No trending movies found");
          
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
}
 
 
  useEffect(() => {
   
   
      getTrendingMovies();
   
    
  }, []);


  return (
    <div>
    <HomeContext.Provider value={data}>
      <Poster></Poster>
    </HomeContext.Provider>
                                                                                                                 
   
   
    </div>
  )
}

export default Home
  