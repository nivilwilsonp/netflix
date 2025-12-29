import React, { useEffect } from 'react'
import { useState } from 'react'
import Poster from '../Poster/Poster'
import axios from 'axios'
import { baseURL } from '../constants';

function Home() {
  const [ImgUrl,setImageUrl]=useState("");
  const[MovieData,setMovieData]=useState({});
  useEffect(()=>{
    
  const url=`${baseURL}/api/trending`;
 axios.get(url).then(response => {
  if(response.data.results.length>0){
    
let data=response.data.results[1];
console.log("the data is = ",data.backdrop_path);
setImageUrl(data.backdrop_path);
setMovieData(data);

  }else{
    console.log("No trending movies found");
    
  }
    
 }).catch(error => {
    console.error('There was an error!', error)
 })   ;},[]);

  return (
    <div>
   {ImgUrl && <Poster path={ImgUrl} data={MovieData} />}
    </div>
  )
}

export default Home