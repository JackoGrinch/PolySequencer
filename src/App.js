//import ControlButton from "./ControlButton.jsx";
//import SequencerStep from "./SequencerStep.jsx";
import SequencerFrame from "./SequencerFrame.jsx";
import React, { useState } from "react";
import "./styles.css";
//pootings
export default function App(props) {
  return (
    <div className="App">
      <SequencerFrame audio={props.audio} />
    </div>
  );
}
