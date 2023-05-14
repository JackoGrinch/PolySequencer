import React, { useState } from "react";
import NumberBox from "./NumberBox";
import ToggleButton from "./ToggleButton.jsx";

function StripControlBoard(props) {
  //const [selectedStrip, setSelectedStrip] = useState(null);

  return (
    <div className="StripControlBoard">
      <h1> Strip: {props.selectedStrip + 1} </h1>
      <ToggleButton />
    </div>
  );
}

export default StripControlBoard;
