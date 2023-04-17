import React from "react";

function AddNewStrip(props) {
  return (
    <div className="addNewStrip" onClick={props.addStrip}>
      {" "}
      +{" "}
    </div>
  );
}

export default AddNewStrip;
