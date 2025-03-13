import { useState, useEffect } from "react";    
// step:1
//  useState → Allows us to store data inside the component (here, we store API data).
//  useEffect → Runs code automatically when the component loads.


// step:2
function FetchDataExample() {    //   Define the Component    This is a functional component in React.
  
  //step:3
  const [data, setData] = useState([]);  


// data → Stores the fetched data (starts as an empty array []).
//  setData → A function to update data.
//  useState([]) → Initializes data as an empty array.

  
//step:4


  // Fetch Data when the Component Loads

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")            // fetch() is a JavaScript function that requests data from a URL.
      .then((res) => res.json())    // .json() converts the raw API response into JavaScript objects.


      .then((data) => setData(data.slice(0, 10))); // Show only 5 items
  }, []);

// The reason 100 items are fetched initially is because the API (https://jsonplaceholder.typicode.com/posts) returns 100 posts by default.




  // useEffect runs when the component first renders.
  //It is used to perform side effects (like fetching data from an API).
  
  


  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDataExample;


