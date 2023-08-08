import React, { useState } from "react";
import "./CreateTrotter.css";
import { displayUserProfileAPI } from "../API/API";

const CreateTrotter = () => {
  const [nickname, setNickname] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [signatureMove, setSignatureMove] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const skills = [
    "Dunking",
    "Three-Point Shooting",
    "Ball Handling",
    "Defense",
    "Passing",
    "Rebounding",
    "Post Moves",
    "Other",
  ];

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handleSignatureMoveChange = (event) => {
    setSignatureMove(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let userProfileDetails = {
      nickname: nickname,
      lastname: lastName,
      skill: selectedSkill,
      signature_move: signatureMove,
      profile_picture: profilePicture,
    };
    try {
      await displayUserProfileAPI(userProfileDetails);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-trotter-card">
      <div className="create-trotter-content">
        <h2>Create Your Trotter Profile</h2>
        <form onSubmit={handleSubmit}>
          <label className="centered">
            Upload Profile Picture:
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </label>
          <label>
            Nickname:
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <label>
            Select Basketball Skill:
            <select value={selectedSkill} onChange={handleSkillChange}>
              <option value="">Select...</option>
              {skills.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </label>
          <label>
            Signature Move:
            <input
              type="text"
              value={signatureMove}
              onChange={handleSignatureMoveChange}
            />
          </label>

          <button type="submit">Create Profile</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTrotter;
