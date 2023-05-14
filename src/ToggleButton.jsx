import React, { useState } from "react";

function ToggleButton(props) {
  const [ButtonState, setButtonState] = useState(false);

  const activeStyle = "blue";

  const deactiveStyle = "black";

  function toggleState() {
    console.log("BANG");
    setButtonState(!ButtonState);
  }

  return (
    <div className="ToggleButton">
      <p className="ToggleButtonLabel"> Label </p>
      <div
        className="ToggleButtonArea"
        onClick={toggleState}
        style={{
          backgroundColor: ButtonState ? activeStyle : deactiveStyle,
        }}
      >
        {" "}
      </div>
    </div>
  );
}

export default ToggleButton;
