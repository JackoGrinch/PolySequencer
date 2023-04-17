//import ControlButton from "./ControlButton.jsx";
//import SequencerStep from "./SequencerStep.jsx";
import SequenceStrip from "./SequenceStrip.jsx";
import SequencerFrame from "./SequencerFrame.jsx";
import StripControlBoard from "./StripControlBoard";

import AddNewStrip from "./AddNewStrip.jsx";
import React, { useState } from "react";
import "./styles.css";
//pootings
export default function App(props) {
  const [Strips, updateStrips] = useState([]);

  function addNewStrip() {
    const newStrip = Strips.length + 1;
    updateStrips((prevSteps) => [...Strips, { key: newStrip, value: null }]);
  }

  function removeStrip() {
    const newStrip = Strips.length - 1;
    updateStrips((prevSequenceSteps) =>
      prevSequenceSteps.filter((_, index) => index < newStrip)
    );
  }

  return (
    <div className="App">
      <SequencerFrame audio={props.audio} />
      {Strips.map((strip, index) => {
        return (
          <SequenceStrip key={strip.key} ID={strip.key} audio={props.audio} />
        );
      })}

      <AddNewStrip addStrip={addNewStrip} />
      <StripControlBoard />
    </div>
  );
}
