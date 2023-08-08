import React, { useEffect, useState } from "react";
import { getAllTrottersAPI } from "../API/API";
import { useNavigate } from "react-router-dom";

function AllTrotter() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllTrotter();
  }, []);

  async function getAllTrotter() {
    try {
      let { data } = await getAllTrottersAPI();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  function goToPlayer(id) {
    navigate(`/`);
  }

  return (
    <div>
      {data.map(({ id }) => (
        <div key={id} onClick={() => goToPlayer(id)}>
          {id}
        </div>
      ))}
    </div>
  );
}

export default AllTrotter;
