import React, { useState, useEffect } from "react";

function EditPlayer() {
  const [updatedData, setUpdatedData] = useState({});

  function handleOnChange(id, value) {
    console.log(id, value);
    setUpdatedData({ ...updatedData, [id]: value });
  }

  console.log(updatedData);
  return (
    <form>
      <div>
        {/* options */}
        <label>Options</label>
        {/* <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input> */}
        <select
          id="options"
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        >
          <option>choose an option</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div>
        {/* height */}
        <label>Height</label>
        <input
          id="height"
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* nickname */}
        <label>Nickname</label>
        <input
          id="nickname"
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* lastname */}
        <label>Lastname</label>
        <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* hometown */}
        <label>Hometown</label>
        <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* almamater */}
        <label>Almamater</label>
        <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* jersey number */}
        <label>Jersey Number</label>
        <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* bio */}
        <label>Bio</label>
        <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* career highlights */}
        <label>Career highlights</label>
        <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* career history */}
        <label>Career History</label>
        <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* favorite quote */}
        <label>Favorite Quote</label>
        <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
      <div>
        {/* hobbies */}
        <label>Hobbies</label>
        <input
          id=""
          name=""
          onChange={(e) => handleOnChange(e.target.id, e.target.value)}
        ></input>
      </div>
    </form>
  );
}

export default EditPlayer;
