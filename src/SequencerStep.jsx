import React, { useState } from "react";

function SequencerStep() {
  const [stepTriggerIndicator, setTriggerIndicator] = useState("white");
  const [indicatorStyle, setIndicatorStyle] = useState("red");
  const [stepState, setStepState] = useState(true);

  function HandleTriggerIndicator(isActive) {
    if (isActive) {
      setTriggerIndicator("blue");
    } else {
      setTriggerIndicator("white");
    }
  }

  function HandleClick() {
    //console.log(stepState);
    setStepState(!stepState);
    if (stepState) {
      setIndicatorStyle("green");
    } else {
      setIndicatorStyle("red");
    }
  }
  return (
    <div
      className="sequencerStep"
      style={{ backgroundColor: stepTriggerIndicator }}
    >
      <button
        className="sequencerStepButton"
        value={stepState}
        onClick={HandleClick}
      ></button>
      <div
        style={{ backgroundColor: indicatorStyle }}
        className="sequencerStepIndicator"
      ></div>
    </div>
  );
}

export default SequencerStep;
