import React, { useState } from "react";

const DropdownMenu = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        className="dropSelector"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Select an option</option>
        {options.map((item, index) => (
          <option key={index} value={item.targetName}>
            {item.targetName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
