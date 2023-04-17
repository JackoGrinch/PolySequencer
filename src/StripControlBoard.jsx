import React, { useState } from "react";
import NumberBox from "./NumberBox";

function StripControlBoard(props) {
  const [selectedStrip, setSelectedStrip] = useState(null);

  return (
    <div className="StripControlBoard">
      <NumberBox
        increment={0.1}
        lowerLimit={0}
        upperLimit={120}
        suffix={"bpm"}
        decimalPlace={2}
      />
    </div>
  );
}

export default StripControlBoard;
