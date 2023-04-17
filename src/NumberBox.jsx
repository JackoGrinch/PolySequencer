import React, { useState, useEffect } from "react";

//upperLimit, lowerLimit
function NumberBox(props) {
  const [number, setNumber] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  useEffect(() => {
    const handleMouseUp = () => {
      setDragging(false);
    };

    const handleMouseMove = (e) => {
      if (dragging) {
        const dragEnd = e.clientY;
        const difference = dragEnd - dragStart;

        if (difference > 0) {
          if (number !== props.lowerLimit) setNumber(number - props.increment);
        } else if (difference < 0) {
          if (number !== props.upperLimit) setNumber(number + props.increment);
        }

        setDragStart(dragEnd);
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dragging, dragStart, number]);

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStart(e.clientY);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
        userSelect: "none",
        cursor: "ns-resize"
      }}
      onMouseDown={handleMouseDown}
    >
      <h2>
        {number.toFixed(props.decimalPlace)} {props.suffix}
      </h2>
    </div>
  );
}

export default NumberBox;
