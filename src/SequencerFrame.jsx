import React, { useState } from "react";
import SequenceStrip from "./SequenceStrip.jsx";
import StripControlBoard from "./StripControlBoard";
import AddNewStrip from "./AddNewStrip.jsx";
import StepControlBoardTab from "./StepControlBoardTab.jsx";

function SequencerFrame(props) {
  const [Strips, updateStrips] = useState([]);
  const [selectedStrip, setSelectedStrip] = useState(0);

  function Strip() {
    this.key = 0;
    this.id = 0;
    this.bpm = 120;
    this.outputLevel = 0.7;
    this.steps = [];
  }

  function addNewStrip() {
    const newStripIndex = Strips.length;
    const newStrip = new Strip();
    newStrip.key = newStripIndex;
    newStrip.id = newStripIndex;
    updateStrips(() => [...Strips, newStrip]);
  }
  function removeStrip() {
    const removeStripIndex = Strips.length - 1;
    updateStrips((prevSequenceStrips) =>
      prevSequenceStrips.filter((_, index) => index < removeStripIndex)
    );
  }

  //AT THE MOMENT ID IS THE SAME AS KEY BUT MAYBE IT WILL NEED TO BE DIFFERENT

  function selectStrip(index) {
    console.log(Strips);
    console.log("selectedStrip: " + index);

    setSelectedStrip(index);
  }

  return (
    <div>
      {Strips.map((strip, index) => {
        return (
          <div>
            <SequenceStrip
              style={selectedStrip === index ? "red" : "white"}
              setSelectedStrip={selectStrip}
              key={strip.key}
              strip={strip}
              audio={props.audio}
            />
          </div>
        );
      })}

      <AddNewStrip addStrip={addNewStrip} />
      <div className="footerPanel">
        <StripControlBoard selectedStrip={selectedStrip} />
        <StepControlBoardTab />
      </div>
    </div>
  );
}

export default SequencerFrame;
