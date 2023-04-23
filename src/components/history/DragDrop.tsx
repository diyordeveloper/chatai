import { useRef, useState } from "react";

function MyDraggableElement() {
  const [isDragging, setIsDragging] = useState(false);
  const draggableRef = useRef<HTMLDivElement>(null);
  const [clone, setClone] = useState<HTMLDivElement | null>(null);

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    // Set the data that will be transferred during the drag
    event.dataTransfer.setData("text/plain", "My draggable element");

    // Create a clone of the element being dragged
    const draggableElement = draggableRef.current;
    if (draggableElement) {
      const clone = draggableElement.cloneNode(true) as HTMLDivElement;
      clone.style.opacity = "0.5";
      setClone(clone);
      setIsDragging(true);
    }
  }

  function handleDragEnd(event: React.DragEvent<HTMLDivElement>) {
    // Remove the clone from the document body
    if (clone) {
      clone.parentNode?.removeChild(clone);
      setClone(null);
    }

    // Reset the dragging state
    setIsDragging(false);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // Update the position of the clone to follow the mouse cursor
    if (clone) {
      clone.style.left = `${event.clientX - clone.clientWidth / 2}px`;
      clone.style.top = `${event.clientY - clone.clientHeight / 2}px`;
    }
  }

  return (
    <>
    <div
      ref={draggableRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onMouseMove={handleMouseMove}
      style={{ position: "absolute" }} // Optional: Set position to absolute for better dragging experience
    >
      <span></span>
       
    </div>
    </>
  );
}
export default MyDraggableElement