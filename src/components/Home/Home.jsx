import { useEffect, useState } from "react";
import Poster from "../Poster/Poster";
import axios from "axios";
import {
  actionEndpoint,
  baseURL,
  comedyEndpoint,
  documentaryEndpoint,
  horrorEndpoint,
  romanceEndpoint,
  trendingEndpoint,
} from "../constants";
import HomeContext from "./HomeContext";
import Banner from "../Banner/Banner";

function Home() {
  const [bannerData, setBannerData] = useState([]);
  const [data, setData] = useState([]);
  const [actionData, setActionData] = useState([]);
  const [comedyData, setComedyData] = useState([]);
  const [horrorData, setHorrorData] = useState([]);
  const [romanceData, setRomanceData] = useState([]);
  const [documentaryData, setDocumentaryData] = useState([]);
  const [index, setIndex] = useState(0);

  function getGenereBasedData(endPoint) {
    const url = baseURL + endPoint;
    axios
      .get(url)
      .then((response) => {
        const results = response?.data?.results ?? [];
        console.log(endPoint, results);

        if (results.length > 0) {
          console.log(endPoint, typeof results);

          if (endPoint === trendingEndpoint) {
            setData(results);
          } else if (endPoint === actionEndpoint) {
            setActionData(results);
          } else if (endPoint === comedyEndpoint) {
            setComedyData(results);
          } else if (endPoint === horrorEndpoint) {
            setHorrorData(results);
          } else if (endPoint === romanceEndpoint) {
            setRomanceData(results);
          } else if (endPoint === documentaryEndpoint) {
            setDocumentaryData(results);
          }
        } else {
          console.log(`No ${endPoint} found`);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  useEffect(() => {
    getGenereBasedData(trendingEndpoint);
    getGenereBasedData(actionEndpoint);
    getGenereBasedData(comedyEndpoint);
    getGenereBasedData(horrorEndpoint);
    getGenereBasedData(romanceEndpoint);
    getGenereBasedData(documentaryEndpoint);
  }, []);
  // Memoize the context value to prevent unnecessary re-renders

  // Memoize the context value to prevent unnecessary re-renders

  return (
    <div className=" flex flex-col">
      <HomeContext.Provider value={{ bannerData, setBannerData, index, data }}>
        <Banner
          className="flex-2"
          index={index}
          data={data}
          setIndex={setIndex}
        ></Banner>

        <Poster title="Trending" data={data} setIndex={setIndex} />
        <Poster title="Action" data={actionData} setIndex={setIndex} />
        <Poster title="Comedy" data={comedyData} setIndex={setIndex} />
        <Poster title="Horror" data={horrorData} setIndex={setIndex} />
        <Poster title="Romance" data={romanceData} setIndex={setIndex} />
        <Poster
          title="Documentary"
          data={documentaryData}
          setIndex={setIndex}
        />
      </HomeContext.Provider>
    </div>
  );
}

export default Home;
