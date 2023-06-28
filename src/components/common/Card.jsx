import React from "react";
import "./Card.css";
const Card = (props) => {
  const { wantToGo, travelers, interested, budget } = props.data;
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <div className="card-data">
            <h3 className="">Travelers:</h3>
            <h3 className="card-text"> {travelers}</h3>
          </div>
          <div className="card-data">
            <h3>Want To Go:</h3>
            <h3 className="card-text"> {wantToGo}</h3>
          </div>
          <div className="card-data">
            <h3>Interested:</h3>
            <h3 className="card-text"> {interested}</h3>
          </div>
          <div className="card-data">
            <h3>Budget:</h3>
            <h3 className="card-text"> {budget}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
