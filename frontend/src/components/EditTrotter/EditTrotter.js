import React, { useState, useEffect } from "react";
import { handleOnChange } from "../helpers/OnChangeHandler";
import { getSingleTrotterAPI, updateTrotterPlayerAPI } from "../API/API";
import { useParams, useNavigate } from "react-router-dom";
import { skills } from "../data/Skills";

function EditPlayer() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [updatedData, setUpdatedData] = useState({
    skill: "",
    height: "",
    nickname: "",
    signature_move: "",
    lastname: "",
    jersey_number: "",
    profile_picture: "",
  });

  useEffect(() => {
    (async function getSingleTrotter() {
      try {
        let { data } = await getSingleTrotterAPI(id);
        console.log(data);
        setUpdatedData(data);
      } catch (error) {}
    })();
  }, [id]);

  async function updateTrotterPlayer(e) {
    e.preventDefault();
    try {
      await updateTrotterPlayerAPI(id, updatedData);
      console.log("submitted");
      navigate(`/user-trotter/${id}`);
    } catch (error) {}
  }

  return (
    updatedData && (
      <form onSubmit={updateTrotterPlayer}>
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
            value={updatedData.skill}
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
            value={updatedData.height}
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
            value={updatedData.nickname}
          ></input>
        </div>
        <div>
          <label>Signature Move</label>
          <input
            id="signature_move"
            name="signature_move"
            onChange={(e) =>
              handleOnChange(
                e.target.id,
                e.target.value,
                updatedData,
                setUpdatedData
              )
            }
            value={updatedData.signature_move}
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
            value={updatedData.lastname}
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
            value={updatedData.jersey_number}
          ></input>
        </div>
        <div>
          {updatedData.profile_picture ? (
            <>
              <label>Profile Picture</label>
              <input
                id="profile_picture"
                name="profile_picture"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                // onChange={(e) =>
                //   handleOnChange(
                //     e.target.id,
                //     e.target.value,
                //     updatedData,
                //     setUpdatedData
                //   )
                // }
                // value={updatedData.profile_picture}
              ></input>{" "}
            </>
          ) : (
            ""
          )}
        </div>
        <button>Submit</button>
      </form>
    )
  );
}

export default EditPlayer;
