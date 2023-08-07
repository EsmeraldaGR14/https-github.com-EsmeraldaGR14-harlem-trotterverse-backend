import React, { useEffect, useState } from "react";
import { getAllPlayersAPI } from "../API/API";
import { useNavigate } from "react-router-dom";

function AllPlayers() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPlayers();
  }, []);

  async function getAllPlayers() {
    try {
      let { data } = await getAllPlayersAPI();
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

export default AllPlayers;
