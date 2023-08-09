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
    navigate(`/trotters/${id}`);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map(
          ({
            id,
            position,
            height,
            nickname,
            lastname,
            hometown,
            almamater,
            jersey_number,
            bio,
            career_highlights,
            career_history,
            favorite_quote,
            hobbies,
          }) => (
            <div
              key={id}
              className="col-md-4 mb-4"
              onClick={() => goToPlayer(id)}
            >
              <div className="card">
                <img
                  src="" // Provide actual image URL
                  className="card-img-top"
                  alt={nickname}
                />
                <div className="card-body">
                  <h5 className="card-title">{nickname}</h5>
                  <p className="card-text">{bio}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Position:</strong> {position}
                  </li>
                  <li className="list-group-item">
                    <strong>Height:</strong> {height}
                  </li>
                  <li className="list-group-item">
                    <strong>Last Name:</strong> {lastname}
                  </li>
                  <li className="list-group-item">
                    <strong>Hometown:</strong> {hometown}
                  </li>
                  <li className="list-group-item">
                    <strong>Alma Mater:</strong> {almamater}
                  </li>
                  <li className="list-group-item">
                    <strong>Jersey Number:</strong> {jersey_number}
                  </li>
                  <li className="list-group-item">
                    <strong>Career Highlights:</strong> {career_highlights}
                  </li>
                  <li className="list-group-item">
                    <strong>Career History:</strong> {career_history}
                  </li>
                  <li className="list-group-item">
                    <strong>Favorite Quote:</strong> {favorite_quote}
                  </li>
                  <li className="list-group-item">
                    <strong>Hobbies:</strong> {hobbies}
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
          )
        )}
      </div>
    </div>
  );
}

export default AllTrotter;
