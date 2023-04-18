import React, { useState, useEffect } from "react";

function NumberBox(props) {
  const [number, setNumber] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragStartingPoint, setDragStartingPoint] = useState(0);
  const [totalDragDistance, setTotalDragDistance] = useState(0);

  useEffect(() => {
    let intervalId;

    const handleMouseUp = () => {
      setDragging(false);
      clearInterval(intervalId);
    };

    const handleMouseMove = (e) => {
      if (dragging) {
        const dragEnd = e.clientY;
        const difference = dragEnd - dragStart;

        setTotalDragDistance(dragStartingPoint - e.clientY);

        if (difference > 0) {
          setNumber((prevNumber) => prevNumber - props.increment);
        } else if (difference < 0) {
          setNumber((prevNumber) => prevNumber + props.increment);
        }
        setDragStart(dragEnd);
      }
    };

    if (dragging && !intervalId) {
      intervalId = setInterval(() => {
        if (totalDragDistance < -100) {
          setNumber((prevNumber) => prevNumber - props.increment);
        } else if (totalDragDistance > 100) {
          setNumber((prevNumber) => prevNumber + props.increment);
        }
      }, 100);
    }

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, [dragging, dragStart, totalDragDistance]);

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStart(e.clientY);
    setDragStartingPoint(e.clientY);
  };

  return (
    <div className="NumberBox" onMouseDown={handleMouseDown}>
      <h2>
        {number.toFixed(props.decimalPlace)} {props.suffix}
      </h2>
    </div>
  );
}

export default NumberBox;
