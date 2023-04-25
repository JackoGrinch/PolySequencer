import React, { useState } from "react";
import StripControlBoard from "./StripControlBoard.jsx";
import StepControlBoardTab from "./StepControlBoardTab.jsx";

function FooterControlBoard(props) {
  const [startY, setStartY] = useState(null);
  const [startHeight, setStartHeight] = useState(null);
  const [isMoving, setIsMoving] = useState(false);

  function handleMouseDown(e) {
    setIsMoving(true);
    setStartY(e.clientY);
    setStartHeight(
      parseInt(window.getComputedStyle(e.target.parentNode).height, 10)
    );

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    if (isMoving) {
      console.log("BANG onMouseDown");
      e.target.parentNode.style.height =
        startHeight + (e.clientY - startY) + "px";
    }
  }

  function handleMouseUp() {
    setIsMoving(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  return (
    <div className="ResizableFooter footerPanel">
      <div className="ResizeFooterHandle" onMouseDown={handleMouseDown}></div>
      <StripControlBoard selectedStrip={props.selectedStrip} />

      <StepControlBoardTab selectedStep={props.selectedStep} />
    </div>
  );
}

export default FooterControlBoard;
