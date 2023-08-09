import React, { useEffect, useState } from "react";
import { getSingleTrotterAPI } from "../API/API";
import { useParams } from "react-router-dom";

function SingleUserTrotter() {
  let { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    (async function getSingleTrotter() {
      try {
        let { data } = await getSingleTrotterAPI(id);
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{`${data.nickname} ${data.lastname}`}</h2>
        <img className="card-img-bottom" src={data.profile_picture} alt="" />
        <p className="card-text">
          <strong>Signature Move: </strong>
          {data.signature_move}
        </p>
        <p>
          <strong>Jersey Number: </strong>
          {data.jersey_number}
        </p>
        <p className="card-text">
          <strong>Skill: </strong>
          {data.skill}
        </p>
      </div>
    </div>
  );
}

export default SingleUserTrotter;
