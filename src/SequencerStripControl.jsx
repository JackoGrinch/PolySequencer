// import React, { useState } from "react";
import StepLengthController from "./StepLengthController";

function SequenceStripControl(props) {
  // const [numberOfSteps, setNumberOfSteps] = useState(8);

  return (
    <div className="stripControlPanel">
      <StepLengthController
        handleStepChange={props.handleStepChange}
        numSteps={props.numSteps}
      />
      <button onClick={props.audio.start}> start </button>
    </div>
  );
}

export default SequenceStripControl;
