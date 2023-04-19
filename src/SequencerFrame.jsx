import React, { useState } from "react";
import SequenceStrip from "./SequenceStrip.jsx";
import StripControlBoard from "./StripControlBoard";
import AddNewStrip from "./AddNewStrip.jsx";

function SequencerFrame(props) {
  const [Strips, updateStrips] = useState([]);
  const [selectedStrip, setSelectedStrip] = useState(0);

  function addNewStrip() {
    const newStrip = Strips.length;
    updateStrips((prevSteps) => [...Strips, { key: newStrip, value: null }]);
  }
  function removeStrip() {
    const newStrip = Strips.length - 1;
    updateStrips((prevSequenceSteps) =>
      prevSequenceSteps.filter((_, index) => index < newStrip)
    );
  }

  //AT THE MOMENT ID IS THE SAME AS KEY BUT MAYBE IT WILL NEED TO BE DIFFERENT

  function selectStrip(index) {
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
              ID={strip.key}
              audio={props.audio}
            />
          </div>
        );
      })}

      <AddNewStrip addStrip={addNewStrip} />
      <StripControlBoard selectedStrip={selectedStrip} />
    </div>
  );
}

export default SequencerFrame;
