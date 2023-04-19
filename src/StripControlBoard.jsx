import React, { useState } from "react";
import NumberBox from "./NumberBox";

function StripControlBoard(props) {
  //const [selectedStrip, setSelectedStrip] = useState(null);

  return <div className="StripControlBoard"> Strip: {props.selectedStrip}</div>;
  
  
}

export default StripControlBoard;
