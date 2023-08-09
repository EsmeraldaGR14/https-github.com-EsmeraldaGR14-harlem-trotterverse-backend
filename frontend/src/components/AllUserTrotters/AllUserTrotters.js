import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUserTrotterAPI } from "../API/API";

function AllUserTrotters() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    (async function getAllUserTrotter() {
      try {
        let { data } = await getAllUserTrotterAPI();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function goToUserTrotter(id) {
    navigate(`/user-trotter/${id}`);
  }

  function amountOfTrotters() {
    let amount = data.length;
    console.log(amount);
    return amount;
  }
  amountOfTrotters();

  return (
    <div>
      <h3>You have created {amountOfTrotters()} amount of players!</h3>
      <div className="row">
        {data.map(({ id, signature_move, nickname, profile_picture }) => (
          <div
            className="col-md-4 mb-4"
            key={id}
            onClick={() => goToUserTrotter(id)}
          >
            <div className="card">
              <img className="card-img-top" src={profile_picture} alt="" />
              <div className="card-body">
                <h5 className="card-title">{nickname}</h5>
                <p className="card-text">{signature_move}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllUserTrotters;
