console.clear();

const url = "https://swapi.dev/api/people";

// async function fetchData() {
    
//     try {
//     const response = await fetch("https://swapi.dev/api/people");
    
//     if (response.ok) {
//     const data = await response.json();
//     console.log(data)
//     return data;
//     } else {
//         console.log('Bad response')
//     } catch (e) {
//     console.error('An Error Occured')
//     }
// }
    
// }

async function fetchData() {
    try {
      const response = await fetch("https://swapi.dev/api/people");
  
      if (response.ok) {
        
        const data = await response.json();
        console.log(data.results[2].eye_color)
        return data;
        
      } else {
        
        console.error("Bad Response");
      }
    } catch (error) {
     
      console.error("An Error occurred");
    }
  }

fetchData();
