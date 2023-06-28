import React from "react";
import "./Card.css";
import { connect } from "react-redux";
import addTravelAction from "../../redux/actions/addTravelAction";
const Card = (props) => {
  const { wantToGo, travelers, interested, budget } = props.data;
  const deleteTrip = () => {
    const tripArray = [...props.state.travelList];
    tripArray.splice(props.index, 1);
    props.addTravelAction(tripArray);
  };
  return (
    <div className="card-container">
      <div className="card">
        <button className="delete-button" onClick={() => deleteTrip()}>
          Delete
        </button>
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
const mapStateToProps = (state) => ({
  state: { ...state },
});
const mapDispatchToProps = (dispatch) => ({
  addTravelAction: (payload) => {
    dispatch(addTravelAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
