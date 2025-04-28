import { useEffect, useState } from "react";

function FetchComponent() {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("File not found");
      }

      const fetchedData = await res.json();
      setData(fetchedData);
    } catch (err) {
      console.error("Error while fetching data", err);
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

export default FetchComponent;
