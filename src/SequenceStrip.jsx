import React, { useRef, useEffect, useState } from "react";
import SequencerStep from "./SequencerStep.jsx";
import SequencerStripControl from "./SequencerStripControl.jsx";
import initialStepsArray from "./InitialStepsArray.jsx";

function SequenceStrip(props) {
  const [numberOfSteps, setNumberOfSteps] = useState(1);
  const [stepArray, updateStepArray] = useState([{}]);

  function updateNumberOfSteps(x) {
    //Check not lower than 0

    if (x !== 0) {
      //If increasing the number of Steps
      if (x > numberOfSteps) {
        const newStep = numberOfSteps + 1;
        updateStepArray((prevSteps) => [
          ...stepArray,
          { key: newStep, value: null }
        ]);
      }
      //if decreasing the number of steps
      if (x < numberOfSteps) {
        const newStep = numberOfSteps - 1;
        setNumberOfSteps(newStep);
        updateStepArray((prevSequenceSteps) =>
          prevSequenceSteps.filter((_, index) => index < newStep)
        );
      }
      setNumberOfSteps(x);
      //props.audio.updateStripLength(props.ID, x);
      console.log("STEPS " + numberOfSteps);
    }
  }

  const updateStep = (id, value) => {
    updateStepArray((prevSequenceSteps) =>
      prevSequenceSteps.map((step) =>
        step.id === id ? { ...step, value } : step
      )
    );
  };

  return (
    <div>
      <div className="sequencerStrip">
        <SequencerStripControl
          handleStepChange={updateNumberOfSteps}
          numSteps={numberOfSteps}
          audio={props.audio}
          stripID={props.ID}
        />
        <div className="sequencerStepTrack">
          {stepArray.map((step) => (
            <SequencerStep
              key={step.id}
              id={step.id}
              value={step.value}
              onChange={(value) => updateStep(step.id, value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SequenceStrip;
