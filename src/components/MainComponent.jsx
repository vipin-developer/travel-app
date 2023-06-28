import React, { useState } from "react";
import "./MainComponent.css";
import Dropdown from "./common/Dropdown";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import addTravelAction from "../redux/actions/addTravelAction";
const MainComponent = ({ state, addTravelAction }) => {
  const [wantToGo, setWantToGo] = useState("");
  const [interested, setInterested] = useState("");
  const [travelers, setTravelers] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const createMyTrip = () => {
    const tripArray = [...state.travelList];
    tripArray.push({ wantToGo, travelers, budget, interested });
    addTravelAction(tripArray);
  };
  const wantToGoOptions = ["Bostwana", "Egypt", "Kenya", "India", "Malawa"];
  const interestedOptions = [
    "Adventure & Outdoors",
    "Hritage & culture",
    "Nature & Landscape",
    "Wildlife & Safari",
    "Wine & Food",
    "Beaches",
  ];
  const travelersOptions = [
    "1 traveleres",
    "2 traveleres",
    "3 traveleres",
    "4 traveleres",
    "5 traveleres",
    "6 traveleres",
    "6+ traveleres",
  ];
  const budgetOptions = [
    "$4000-$5000",
    "$5000-$6000",
    "$6000-$7000",
    "$7000-$8000",
    "$8000-$9000",
    "$9000-$10000",
    "%10000+",
  ];

  return (
    <>
      <button className="admin-button" onClick={() => navigate("/admin")}>
        Admin Panel
      </button>
      <div className="main-div">
        <p>We Care, So You Can Travel Carefree</p>
        <p>
          Let our experts plan your private, tailor-made and secure tour in 70+
          inspiring destinations.
        </p>
        <div className="form-div">
          <Dropdown
            placeHolder="Where do you want to go?"
            getSelectedValue={(value) => setWantToGo(value)}
            options={wantToGoOptions}
          />
          <Dropdown
            placeHolder="Your Interests?"
            getSelectedValue={(value) => setInterested(value)}
            options={interestedOptions}
          />
          <Dropdown
            placeHolder="No of travelrs"
            getSelectedValue={(value) => setTravelers(value)}
            options={travelersOptions}
          />
          <Dropdown
            placeHolder="Budget per person"
            getSelectedValue={(value) => setBudget(value)}
            options={budgetOptions}
          />
          <button className="create-trip-button" onClick={() => createMyTrip()}>
            Create My Trip
          </button>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  state: { ...state },
});

const mapDispatchToProps = (dispatch) => ({
  addTravelAction: (payload) => {
    console.log(payload);
    dispatch(addTravelAction(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
