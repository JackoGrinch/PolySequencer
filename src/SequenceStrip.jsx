import React, { useRef, useEffect, useState } from "react";
import SequencerStep from "./SequencerStep.jsx";
import SequencerStripControl from "./SequencerStripControl.jsx";
import initialStepsArray from "./InitialStepsArray.jsx";

function SequenceStrip(props) {
  const [numberOfSteps, setNumberOfSteps] = useState(1);
  const [stepArray, updateStepArray] = useState([{}]);

  function Step() {
    this.key = 0;
  }

  function updateNumberOfSteps(x) {
    //Check not lower than 0
    if (x !== 0) {
      //If increasing the number of Steps
      if (x > numberOfSteps) {
        const newStepIndex = numberOfSteps;
        const newStep = new Step();
        newStep.key = newStepIndex;
        updateStepArray((prevSteps) => [...stepArray, newStep]);
      }
      //if decreasing the number of steps

      //INSTEAD OF REMOVING FROM THE ARRAY, LATER ON Number of steps can be adjusted and filtered at the render stage
      //THis will allow for Step information to be retained if added and removed
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
      <div
        className="sequencerStrip"
        style={{ backgroundColor: props.style }}
        onClick={() => {
          props.setSelectedStrip(props.strip.id);
        }}
      >
        <SequencerStripControl
          handleStepChange={updateNumberOfSteps}
          numSteps={numberOfSteps}
          audio={props.audio}
          stripID={props.strip.id}
        />
        <div className="sequencerStepTrack">
          {stepArray.map((step, index) => (
            <div
              className="sequencerStep"
              onClick={() => {
                props.setSelectedStep(props.strip.id, index);
              }}
            >
              <SequencerStep
                key={step.id}
                id={step.id}
                value={step.value}
                onChange={(value) => updateStep(step.id, value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SequenceStrip;
