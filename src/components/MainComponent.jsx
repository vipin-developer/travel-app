import React from "react";
import './MainComponent.css'
import Dropdown from "./common/Dropdown";

const MainComponent=()=>{
    return <>
    <div className="main-div">
      <p>We Care, So You Can Travel Carefree</p>
      <p>Let our experts plan your private, tailor-made and secure tour in 70+ inspiring destinations.</p>
      <div className="form-div">
        <Dropdown placeHolder="Where do you want to go?" />
        <Dropdown  placeHolder="Your Interests?"/>
        <Dropdown  placeHolder="No of travelrs"/>
        <Dropdown  placeHolder="Budget per person"/>
        <button className="create-trip-button">Create My Trip</button>
      </div>
    </div>
    </>
}
export default MainComponent;