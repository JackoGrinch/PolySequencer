import React, { useState, useEffect } from "react";

function NumberBox(props) {
  const [number, setNumber] = useState(120);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragStartingPoint, setDragStartingPoint] = useState(0);
  const [totalDragDistance, setTotalDragDistance] = useState(0);

  useEffect(() => {
    let intervalId;

    const increaseNumber = () => {
      if (number >= props.upperLimit) {
        setNumber(props.upperLimit);
      } else {
        setNumber((prevNumber) => prevNumber + props.increment);
      }
    };

    const decreaseNumber = () => {
      if (number <= props.lowerLimit) {
        setNumber(props.lowerLimit);
      } else {
        setNumber((prevNumber) => prevNumber - props.increment);
      }
    };
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
          decreaseNumber();
        } else if (difference < 0) {
          increaseNumber();
        }
        setDragStart(dragEnd);
      }
    };

    if (dragging && !intervalId) {
      intervalId = setInterval(() => {
        if (totalDragDistance < -100) {
          decreaseNumber();
        } else if (totalDragDistance > 100) {
          increaseNumber();
        }
      }, 10);
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
    <div>
      <p className="NumberBoxLabel"> {props.labelName} </p>
      <div className="NumberBox" onMouseDown={handleMouseDown}>
        <p>{number.toFixed(props.decimalPlace)}</p>
        <p> {props.suffix}</p>
      </div>
    </div>
  );
}

export default NumberBox;
