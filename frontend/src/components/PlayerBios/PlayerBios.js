import React, { useState, useEffect } from "react";
import { getSingleActivePlayerAPI } from "../API/API";
import { useParams, useNavigate } from "react-router-dom";

function PlayerBios() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    (async function getSingleTrotter() {
      try {
        let { data } = await getSingleActivePlayerAPI(id);
        console.log(data[0]);
        setData(data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="card">
      <div className="card-body">
        <img
          src={data.profile_picture}
          className="card-img-top"
          alt={data.nickname}
        />
        <h5 className="card-title">{`${data.nickname} ${data.lastname}`}</h5>
        <p className="card-text">{data.bio}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Position:</strong> {data.position}
          </li>
          <li className="list-group-item">
            <strong>Height:</strong> {data.height}
          </li>
          <li className="list-group-item">
            <strong>Last Name:</strong> {data.lastname}
          </li>
          <li className="list-group-item">
            <strong>Hometown:</strong> {data.hometown}
          </li>
          <li className="list-group-item">
            <strong>Alma Mater:</strong> {data.almamater}
          </li>
          <li className="list-group-item">
            <strong>Jersey Number:</strong> {data.jersey_number}
          </li>
          <li className="list-group-item">
            <strong>Career Highlights:</strong> {data.career_highlights}
          </li>
          <li className="list-group-item">
            <strong>Career History:</strong> {data.career_history}
          </li>
          <li className="list-group-item">
            <strong>Favorite Quote:</strong> {data.favorite_quote}
          </li>
          <li className="list-group-item">
            <strong>Hobbies:</strong> {data.hobbies}
          </li>
        </ul>
        <button onClick={goBack}>BACK</button>
      </div>
    </div>
  );
}

export default PlayerBios;
