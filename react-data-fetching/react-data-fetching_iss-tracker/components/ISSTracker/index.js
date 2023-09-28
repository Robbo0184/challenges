import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR, {mutate} from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcher = async url => {
  const res = await fetch(url)
 
 
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
 
  return res.json()
}

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default  function ISSTracker() {

  const { data, error, isLoading } = useSWR(URL, fetcher, {refreshInterval: 5000})
  

  
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { longitude, latitude } = data || { longitude: 0, latitude: 0 };

  
  
  // if (!data.ok) {
  //   const error = new Error('An error occurred while fetching the data')
  //   error.info = await res.json()
  //   error.status = res.status
  //   throw error


  // }





  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => mutate(URL)}
      />
    </main>
  );
}