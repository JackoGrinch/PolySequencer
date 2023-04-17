import React, { useEffect, useState } from "react";

function StepLengthController(props) {
  return (
    <div className="stepLengthController">
      <button
        onClick={() => {
          props.handleStepChange(props.numSteps - 1);
        }}
        name="decreaseSteps"
        className="stepsButton"
      >
        ←
      </button>
      <div className="numberOfSteps"> {props.numSteps} </div>
      <button
        onClick={() => {
          props.handleStepChange(props.numSteps + 1);
        }}
        name="increaseSteps"
        className="stepsButton"
      >
        →
      </button>
    </div>
  );
}

export default StepLengthController;
