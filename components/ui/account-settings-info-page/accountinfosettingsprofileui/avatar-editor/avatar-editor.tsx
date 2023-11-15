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
  const initialRadius = 119;
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
  // This is responsible for the stutter effect in the editor
  const centerImageInCircle = () => {
    const x = circlePos.x - (image.width * scaleValue) / 2;
    const y = circlePos.y - (image.height * scaleValue) / 2;
    setImagePos({ x, y });
  };
  // Update the image position and circle radius on scale change
  useEffect(() => {
    // Removing setRadius was able to fix the issue somewhat
    setRadius(initialRadius * scaleValue);
    console.log(scaleValue);
    centerImageInCircle();
  }, [scaleValue, circlePos, image]);
  // Modify the draw function to apply scaleValue

  // Update drawCircle to use scaleValue
  const drawCircle = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 5 * scaleValue; // Use scaleValue here
    ctx.beginPath();
    ctx.arc(circlePos.x, circlePos.y, radius, 0, Math.PI * 2);
    ctx.stroke();
  };
  const draw = () => {
    const canvas = canvasRef.current;
    if (canvas && image.complete) {
      const ctx = canvas.getContext("2d");
      const offscreenCanvas = document.createElement("canvas");
      const offCtx = offscreenCanvas.getContext("2d");

      if (ctx && offCtx) {
        offscreenCanvas.width = canvas.width;
        offscreenCanvas.height = canvas.height;

        // Draw the original image with transformations
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        const centerX = imagePos.x + (image.width * scaleValue) / 2;
        const centerY = imagePos.y + (image.height * scaleValue) / 2;
        ctx.translate(centerX, centerY);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.translate(-centerX, -centerY);
        ctx.scale(scaleValue, scaleValue);
        ctx.drawImage(image, imagePos.x / scaleValue, imagePos.y / scaleValue);
        ctx.restore();

        // Draw the original image onto the off-screen canvas
        offCtx.drawImage(canvas, 0, 0);
        offCtx.globalCompositeOperation = "saturation";

        // Apply a red tint over the off-screen canvas
        offCtx.fillStyle = "hsl(0,0%,0%)";
        offCtx.globalAlpha = 0.8;
        offCtx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
        offCtx.globalCompositeOperation = "source-over";

        // Create the circle mask on the main canvas
        ctx.globalCompositeOperation = "destination-in";
        ctx.beginPath();
        ctx.arc(circlePos.x, circlePos.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw the red-tinted image, excluding the circle area
        ctx.globalCompositeOperation = "destination-over";
        ctx.drawImage(offscreenCanvas, 0, 0);

        // Reset the composite operation
        ctx.globalCompositeOperation = "source-over";
        // Optionally, redraw the circle border if needed
        drawCircle(ctx);
      }
    }
  };

  // Redraw the canvas whenever the image position, scale, or rotation changes
  useEffect(() => {
    draw();
  }, [imagePos, scaleValue, rotate]);

  const handleDragging = (clientX: number, clientY: number) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    let newX = clientX - rect.left - dragStart.x * scaleValue; // this doesn't effect boundries
    let newY = clientY - rect.top - dragStart.y * scaleValue;
    console.log("clientX in the codebase", clientX);
    console.log("clientX in the codebase", clientY);
    console.log("clientX in the codebase", dragStart.x);
    console.log("clientX in the codebase", dragStart.y);
    console.log(scaleValue);

    setImagePos({ x: newX, y: newY });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    setIsDragging(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setDragStart({
      x: (event.clientX - rect.left - imagePos.x) / scaleValue,
      y: (event.clientY - rect.top - imagePos.y) / scaleValue,
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
