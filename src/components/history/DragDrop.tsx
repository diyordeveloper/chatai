import React, { useState } from "react";

function DragAndDrop() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function handleDragEnter(event:any, index:any) {
    event.preventDefault();
    setHoveredIndex(index);
  }

  function handleDragLeave() {
    setHoveredIndex(null);
  }

  function handleDrop(event:any) {
    event.preventDefault();
    setHoveredIndex(null);
    // handle the dropped item here
  }

  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          onDragEnter={(event) => handleDragEnter(event, index)}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{ backgroundColor: hoveredIndex === index ? "lightgray" : "white" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default DragAndDrop;
