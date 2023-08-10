import React, { useEffect, useState } from "react";
import { getAllTrottersAPI } from "../API/API";
import { useNavigate } from "react-router-dom";
import "./ActivePlayers.css";
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function goToPlayer(id) {
    navigate(`/trotters/${id}`);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map(({ id, profile_picture, nickname, jersey_number }) => (
          <div
            key={id}
            className="col-md-4 mb-4"
            onClick={() => goToPlayer(id)}
          >
            <div className="card">
              <img
                src={profile_picture} // Provide actual image URL
                className="card-img-top"
                alt={nickname}
              />
              <div className="card-body">
                <h5 className="card-title">{nickname}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Jersey Number:</strong> {jersey_number}
                </li>
              </ul>
              <div className="card-body">
                <button
                  className="btn btn-primary"
                  onClick={() => goToPlayer(id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTrotter;
