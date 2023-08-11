import React, { useState, useEffect } from "react";

import { getSingleActivePlayerAPI } from "../API/API";
import { useParams, useNavigate } from "react-router-dom";
import "./PlayerBios.css";

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
        <div style={{ position: "relative", zIndex: 10 }}>
          <div className="wrapper">
            <div
              className="row"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "1.5rem 1rem",
                marginTop: "-5rem",
                marginBottom: "1rem",
              }}
            >
              <div className="col-md-12">
                <p style={{ fontSize: "1.25rem", textTransform: "uppercase" }}>
                  {`${data.position}`} | {`${data.height}`}
                </p>
              </div>
              <div className="col-md-9 col">
                <h1 className="playerdetail-name">
                  <strong>{`${data.nickname}`}</strong> {`${data.lastname}`}
                </h1>
              </div>
              <div className="col-md-3 col">
                <p
                  className="text-right playerdetail-number"
                  style={{ fontSize: "45px" }}
                >
                  5
                </p>
              </div>
              <div className="col-md-12">
                <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                  <p className="mr-3" style={{ fontSize: "1.25rem" }}>
                    <span className="fas fa-map-marker-alt"></span> Hometown |
                    {` ${data.hometown}`}
                  </p>
                  <p className="mr-3" style={{ fontSize: "1.25rem" }}>
                    <span className="fas fa-graduation-cap"></span>{" "}
                    {`${data.almamater}`}
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "3rem" }}>
              <a href="/trotters">
                <span className="fas fa-arrow-left mr-1"></span>Full Roster
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="row mb-5">
            <div className="col-lg-12">
              {/* <h2>
                <span style={{ minWidth: "2.5rem", display: "inline-block" }}>
                  <span className="fas fa-book"></span>
                </span>
             
              </h2> */}
            </div>
            <div className="wrapper">
              <div className="row mb-5">
                <div className="col-lg-12">
                  <h2>
                    <span
                      style={{ minWidth: "2.5rem", display: "inline-block" }}
                    >
                      <span className="fas fa-book"></span>
                    </span>
                    Bio
                  </h2>
                </div>
                <div className="col-lg-12 bioFull">
                  <p>{`${data.bio}`}</p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-lg-12">
                  <h2>
                    <span
                      style={{ minWidth: "2.5rem", display: "inline-block" }}
                    >
                      <span className="fas fa-trophy"></span>
                    </span>
                    Career Highlights and Awards
                  </h2>
                </div>
                <div className="col-lg-12">
                  <p>{`${data.career_highlights}`}</p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-lg-12">
                  <h2>
                    <span
                      style={{ minWidth: "2.5rem", display: "inline-block" }}
                    >
                      <span className="fas fa-hourglass"></span>
                    </span>
                    Career History
                  </h2>
                </div>
                <div className="col-lg-12">
                  <p>
                    {`${data.career_history}`}
                  </p>
                </div>
              </div>
            </div>
            {/* <h5 className="card-title">{`${data.nickname} ${data.lastname}`}</h5>
        <p className="card-text">{data.bio}</p> */}
            {/* <ul className="list-group list-group-flush">
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
        </ul> */}
            <button onClick={goBack}>BACK</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default PlayerBios;
