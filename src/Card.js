import React from "react";
import "./styles.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="cardcomponent">
      <img alt="img" src={`https://robohash.org/${id}`} />
      <div className="robo-details">
        <h2> {name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
