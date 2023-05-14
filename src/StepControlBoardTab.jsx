import React from "react";

function StepControlBoardTab(props) {
  return (
    <div className="stepControlBoardTab">
      <p>Step {props.selectedStep + 1}</p>
    </div>
  );
}

export default StepControlBoardTab;
