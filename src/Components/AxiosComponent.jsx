import { useEffect, useState } from "react";
import axios from "axios";

function AxiosComponent() {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
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

export default AxiosComponent;
