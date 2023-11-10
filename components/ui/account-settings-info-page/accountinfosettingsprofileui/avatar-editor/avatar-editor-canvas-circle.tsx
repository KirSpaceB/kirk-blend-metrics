import React, { useRef, useState, useEffect } from "react";

const CanvasCircle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [circlePos, setCirclePos] = useState({ x: 219, y: 144 }); // Centered horizontally, and vertically at the top and bottom
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const radius = 144; // Half of the canvas height

  const draw = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.src = "/profile_pic.png";
      if (ctx)
        image.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

          ctx.strokeStyle = "#FFF"; // directly setting to white
          ctx.lineWidth = 5.956; // Setting the circle border width

          // This draws the circle
          ctx.beginPath();
          ctx.arc(circlePos.x, circlePos.y, radius, 0, Math.PI * 2);
          ctx.stroke();
        };
    }
  };

  useEffect(() => {
    draw();
  }, [circlePos]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    setIsDragging(true);
    setDragStart({ x: mouseX - circlePos.x, y: mouseY - circlePos.y });
    canvasRef.current!.style.cursor = "grabbing";
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const rect = canvasRef.current!.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Restrict the movement within the canvas
      if (
        mouseX >= 0 &&
        mouseX <= rect.width &&
        mouseY >= 0 &&
        mouseY <= rect.height
      ) {
        handleDragging(event.clientX, event.clientY);
      }
    }
  };

  const handleMouseOut = () => {
    if (isDragging) {
      setIsDragging(false);
      canvasRef.current!.style.cursor = "default";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    canvasRef.current!.style.cursor = "default";
  };

  const handleDragging = (clientX: number, clientY: number) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    let newX = clientX - rect.left - dragStart.x;
    let newY = clientY - rect.top - dragStart.y;

    newX = Math.max(radius, Math.min(newX, rect.width - radius));
    newY = Math.max(radius, Math.min(newY, rect.height - radius));

    setCirclePos({ x: newX, y: newY });
  };

  useEffect(() => {
    const handleMouseMoveDoc = (event: MouseEvent) => {
      if (isDragging) {
        handleDragging(event.clientX, event.clientY);
      }
    };

    const handleMouseUpDoc = () => {
      setIsDragging(false);
      canvasRef.current!.style.cursor = "default";
    };

    document.addEventListener("mousemove", handleMouseMoveDoc);
    document.addEventListener("mouseup", handleMouseUpDoc);

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveDoc);
      document.removeEventListener("mouseup", handleMouseUpDoc);
    };
  }, [isDragging, dragStart]);

  return (
    <canvas
      ref={canvasRef}
      width={438}
      height={288}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseOut}
    />
  );
};

export default CanvasCircle;
