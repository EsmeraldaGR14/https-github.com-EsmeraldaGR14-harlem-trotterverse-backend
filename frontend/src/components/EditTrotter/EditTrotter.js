import React, { useState, useEffect } from "react";
import { handleOnChange } from "../helpers/OnChangeHandler";
import { getSingleTrotterAPI, updateTrotterPlayerAPI } from "../API/API";
import { useParams } from "react-router-dom";
import { skills } from "../data/Skills";

function EditPlayer() {
  let { id } = useParams();
  const [updatedData, setUpdatedData] = useState({
    skill: "",
    height: "",
    nickname: "",
    lastname: "",
    jersey_number: "",
  });

  useEffect(() => {
    (async function getSingleTrotter() {
      try {
        let { data } = await getSingleTrotterAPI(id);
        console.log(data[0]);
        setUpdatedData(data[0]);
      } catch (error) {}
    })();
  }, [id]);

  // async function updateTrotterPlayer(e) {
  //   e.preventDefault();
  //   try {
  //     await updateTrotterPlayerAPI(id);
  //   } catch (error) {}
  // }

  return (
    <form
    // onSubmit={updateTrotterPlayer}
    >
      <div>
        <label>Skill</label>
        <select
          id="position"
          name="position"
          onChange={(e) =>
            handleOnChange(
              e.target.id,
              e.target.value,
              updatedData,
              setUpdatedData
            )
          }
          // value={updatedData.skill}
        >
          <option>Choose a position...</option>
          {skills.map((skill, index) => (
            <option key={index + skill}>{skill}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Height</label>
        <input
          id="height"
          name="height"
          onChange={(e) =>
            handleOnChange(
              e.target.id,
              e.target.value,
              updatedData,
              setUpdatedData
            )
          }
          // value={updatedData.height}
        ></input>
      </div>
      <div>
        <label>Nickname</label>
        <input
          id="nickname"
          name="nickname"
          onChange={(e) =>
            handleOnChange(
              e.target.id,
              e.target.value,
              updatedData,
              setUpdatedData
            )
          }
          // value={updatedData.nickname}
        ></input>
      </div>
      <div>
        <label>Lastname</label>
        <input
          id="lastname"
          name="lastname"
          onChange={(e) =>
            handleOnChange(
              e.target.id,
              e.target.value,
              updatedData,
              setUpdatedData
            )
          }
          // value={updatedData.lastname}
        ></input>
      </div>
      <div>
        <label>Jersey Number</label>
        <input
          id="jersey_number"
          name="jersey_number"
          onChange={(e) =>
            handleOnChange(
              e.target.id,
              e.target.value,
              updatedData,
              setUpdatedData
            )
          }
          // value={updatedData.jersey_number}
        ></input>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default EditPlayer;
