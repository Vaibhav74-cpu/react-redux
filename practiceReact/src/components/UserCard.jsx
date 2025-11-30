import React from "react";
import house from "../assets/house3.png";
import "./UserCard.css";
function UserCard(props) {
  return (
    <div className="container" style={props.style}>
      <h2 id="userTitle">{props.name}</h2>
      <img id="userImg" src={props.img} alt="house" />
      <p id="userDesc">{props.desc}</p>
    </div>
  );
}

export default UserCard;
