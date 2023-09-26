import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const initialLights = [
  { name: 'Kitchen', 
    isOn: false ,
    id: 1
  }, {
    name: 'Living Room',
    isOn: false,
    id: 2
  }, {
    name: 'Bedroom',
    isOn: false,
    id: 3
  }, {
    name: 'Bathroom',
    isOn: false,
    id: 4
  }, {
    name: 'Garage',
    isOn: false,
    id: 5
  }, {
    name: 'Porch',
    isOn: false,
    id: 6
  }, {
    name: 'Garden',
    isOn: false,
    id: 7
  }, {
    name: 'Office',
    isOn: false,
    id: 8
  }
 
]




export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights)
  const [isDimmed, setIsDimmed] = useState(false)
  

  
  useEffect(() => {
    const allLightsOff = lights.every(light => !light.isOn);
    if(allLightsOff) setIsDimmed(true)

    
  }, [lights])
  
  
  function onToggle(id) {
   setLights((lights) =>
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function toggleAllLightsOn() {
    setLights((lights) =>
      lights.map((light) => ({
        ...light,
        isOn: true, 
      }))
    );
  }

  function toggleAllLightsOff() {
    setLights((lights) =>
      lights.map((light) => ({
        ...light,
        isOn: false, 
      }))
    );
  }
  



  return (
    <Layout lights={lights} isDimmed={isDimmed}>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} onToggle={onToggle} toggleAllLightsOn={toggleAllLightsOn} toggleAllLightsOff={toggleAllLightsOff}/>
    </Layout>
  );
}
