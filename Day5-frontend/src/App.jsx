// import { useState, useEffect } from "react";

// function App() {
// //1.STATE: This is React's "memory"
// //We start with an empty array, and we will fill it with data
// const [internshipData, setInternshipData] = useState([]);

// //2.EFFECT: This runs automatically when the page loads.
// useEffect(() => {
//   //We are fetching data from YOUR Day 4 backend!
//   fetch("http://localhost:3000/api/internship")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log("Data received from backend: ", data);
//     setInternshipData(data); //Save the data into React's memory
//   })
//   .catch((error) => console.error("Error fetching data: ",error));
// },[]); //The empty means "only run this once when the page loads"

// //3.UI:This is what the user sees on the screen.
// return(
//   <div style={{ padding: '20px', fontFamily:'Arial'}}>
//     <h1>My internship Details</h1>

//     {internshipData.length === 0 ?(
//       <p>Loading data from backend...</p>
//     ) : (
//       <div style= {{ border: '1px solid black', padding:'10px'}}>
//         <p><strong>Duration: </strong>{internshipData.duration}</p>
//         <p><strong>Tech Stack: </strong>{internshipData.techStack}</p>
//         <p><strong>start Date: </strong>{internshipData.startDate}</p>
//       </div>
//     )}
//   </div>
// )
// }

// export default App;


import { useState, useEffect} from "react";
import InternshipCard from "./components/internshipCard"; //Import the LEGO block

function App() {
  const [intershipData, setInternshipData] = useState({});

  useEffect(() => {
  fetch('http://localhost:3000/api/internship')
  .then((response) => response.json())
  .then((data) => setInternshipData(data))
  .catch((error) => console.error("Error:", error));
},[]);

return (
  <div style= {{ padding:'20px',fontFamily:'Arial'}}>
    <h1>My Dashboard</h1>

    {/*We are using the component and passing data via props!*/}
    {intershipData.duration ? (
      <InternshipCard data = {intershipData} />
    ) : (
      <p>Loading...</p>
    )}
  </div>
)
}

export default App;
