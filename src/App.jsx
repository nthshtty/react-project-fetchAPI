import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const fetchedData = await res.json();
      setData(fetchedData);
    } catch (err) {
      console.error("Error while fectching data", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        data.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Address: {user.address.city}</p>
            <p>Mail: {user.email}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
