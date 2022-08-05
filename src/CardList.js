import React from "react";
//import {robots} from './robots'
import Card from "./Card";
import "./styles.css";
const CardList = ({ robots }) => {
  const robodata = robots.map((user, i) => {
    return (
      <Card name={robots[i].name} email={robots[i].email} id={robots[i].id} />
    );
  });
  return <div className="cardcointer">{robodata}</div>;
};
export default CardList;
