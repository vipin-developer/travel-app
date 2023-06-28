import React from "react";
import "./Admin.css";
import { connect } from "react-redux";
import Card from "../common/Card";
const Admin = ({ state }) => {
  const { travelList } = state;
  return (
    <>
      <div className="admin-panel-text">Admin Panel</div>
      {travelList.length ? (
        <div className="travel-list">
          {travelList.map((travel, index) => (
            <Card key={index} data={travel} />
          ))}
        </div>
      ) : (
        <div className="no-data-found">No data Found</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  state: { ...state },
});

export default connect(mapStateToProps, null)(Admin);
