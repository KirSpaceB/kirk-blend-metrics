import React, { useRef, useState, useEffect } from "react";

interface IAvatarEditor {
  rotate: number;
  scaleValue: number;
  renderedImage: string;
}

const CustomAvatarEditor = ({
  rotate,
  scaleValue,
  renderedImage,
}: IAvatarEditor) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });

  const [image, setImage] = useState(new Image());

  const initialCirclePos = { x: 219, y: 144 };
  const initialRadius = 144;
  const [circlePos, setCirclePos] = useState(initialCirclePos);
  const [radius, setRadius] = useState(initialRadius);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Load the image and set initial position and scale
  useEffect(() => {
    const img = new Image();
    img.src = renderedImage;
    img.onload = () => {
      setImage(img);
      centerImage(img);
    };
  }, []);
  // The center of the canvas element is not dyanmic to the center of the image
  const centerImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return "Check Line 33";
    const x = (canvas.width - img.width) / 2;
    const y = (canvas.height - img.height) / 2;
    setImagePos({ x, y });
  };

  const centerImageInCircle = () => {
    const x = circlePos.x - (image.width * scaleValue) / 2;
    const y = circlePos.y - (image.height * scaleValue) / 2;
    setImagePos({ x, y });
  };
  // Update the image position and circle radius on scale change
  useEffect(() => {
    setRadius(initialRadius * scaleValue);
    console.log(scaleValue);
    centerImageInCircle();
  }, [scaleValue, circlePos, image]);
  // Modify the draw function to apply scaleValue
  const draw = () => {
    const canvas = canvasRef.current;
    if (canvas && image.complete) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();

        // Apply rotation and scaling
        const centerX = imagePos.x + (image.width * scaleValue) / 2;
        const centerY = imagePos.y + (image.height * scaleValue) / 2;
        ctx.translate(centerX, centerY);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.translate(-centerX, -centerY);
        ctx.scale(scaleValue, scaleValue);
        ctx.drawImage(image, imagePos.x / scaleValue, imagePos.y / scaleValue);

        ctx.restore();
        drawCircle(ctx);
      }
    }
  };

  // Update drawCircle to use scaleValue
  const drawCircle = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 5 * scaleValue; // Use scaleValue here
    ctx.beginPath();
    ctx.arc(circlePos.x, circlePos.y, radius, 0, Math.PI * 2);
    ctx.stroke();
  };
  // Redraw the canvas whenever the image position, scale, or rotation changes
  useEffect(() => {
    draw();
  }, [imagePos, scaleValue, rotate]);

  // The issue could be that the draw is wrong
  const handleDragging = (clientX: number, clientY: number) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    let newX = clientX - rect.left - dragStart.x;
    let newY = clientY - rect.top - dragStart.y;

    // Calculate the scaled dimensions of the image
    const scaledWidth = image.width * scaleValue;
    const scaledHeight = image.height * scaleValue;

    // Calculate the min and max x and y values for the image's position
    let minX, minY, maxX, maxY;
    console.log("minX", minX);
    console.log("minY", minY);
    console.log("maxX", maxX);
    console.log("maxY", maxY);

    // Horizontal boundaries
    if (scaledWidth > canvasRef.current.width) {
      minX = canvasRef.current.width - scaledWidth;
      maxX = 0;
    } else {
      minX = 0;
      maxX = canvasRef.current.width - scaledWidth;
    }

    // Vertical boundaries
    if (scaledHeight > canvasRef.current.height) {
      minY = canvasRef.current.height - scaledHeight;
      maxY = 0;
    } else {
      minY = 0;
      maxY = canvasRef.current.height - scaledHeight;
    }

    // Apply the calculated boundaries to the image's position
    newX = Math.min(Math.max(newX, minX), maxX);
    newY = Math.min(Math.max(newY, minY), maxY);
    console.log("image height", image.width);
    console.log("image width", image.height);

    console.log("newX", newX);
    console.log("newY", newY);

    setImagePos({ x: newX, y: newY });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return "Check line 60"; // Guard clause
    setIsDragging(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setDragStart({
      x: event.clientX - rect.left - imagePos.x,
      y: event.clientY - rect.top - imagePos.y,
    });
    canvasRef.current.style.cursor = "grabbing";
  };

  const handleMouseEvents = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      console.log("clientX", event.clientX);
      console.log("clientY", event.clientX);

      handleDragging(event.clientX, event.clientY);
    }
  };

  const handleMouseUp = () => {
    if (!canvasRef.current) return "Check line 60"; // Guard clause
    setIsDragging(false);
    canvasRef.current.style.cursor = "default";
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={438}
        height={288}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseEvents}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp} // Reuse handleMouseUp for onMouseOut
      />
    </>
  );
};

export default CustomAvatarEditor;
