import React, { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  // State to store fetched data and any errors
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetched data when the componen mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post('http://localhost:3000/posts')

        if(response.data.success) {
          setData(response.data.data) //set the fetched data to state
          console.log(response.data.data)
        } else {
          setError(response.data.message) //set the error message if no data found
        }
      } catch(error) {
        console.log('Error fetching data:', error)
        setError('Failed to fetch data.')
      } finally {
        setLoading(false) //stop loading after fetch is done
      }
    }
    fetchData(); //call fetchData function
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {loading && <p>Loading data...</p>} {/*Show loading while fetching data*/}
      {error && <p>{error}</p>} {/* Display error message if any */}

      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
            {/*Replace 'id' with the appropriate key from your data*/}
            {item.title} - {item.description} - {item.language} {/* Display data fields as needed */}
            </li>

          ))}
        </ul>
      ) : (
        !loading && <p>No data found.</p> // Display message if no data found
      )}
    </div>
  )
};

export default Home;
