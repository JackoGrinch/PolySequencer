import React, { useState } from "react";
import NumberBox from "./NumberBox";

function StripControlBoard(props) {
  const [selectedStrip, setSelectedStrip] = useState(null);

  return (
    <div className="StripControlBoard">
      <NumberBox
        increment={0.1}
        lowerLimit={0}
        upperLimit={240}
        labelName={"Tempo"}
        suffix={"BPM"}
        decimalPlace={1}
      />
    </div>
  );
}

export default StripControlBoard;
