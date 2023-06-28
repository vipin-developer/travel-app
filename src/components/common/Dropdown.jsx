import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ placeHolder, getSelectedValue, options }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    getSelectedValue(e.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">{placeHolder}</option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
