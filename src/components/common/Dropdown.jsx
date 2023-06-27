import React, { useState } from 'react';
import './Dropdown.css'

const Dropdown = ({placeHolder}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">{placeHolder}</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
     
    </div>
  );
};

export default Dropdown;