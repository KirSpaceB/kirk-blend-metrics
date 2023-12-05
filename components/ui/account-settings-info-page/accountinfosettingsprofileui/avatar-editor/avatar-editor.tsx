import React, { useRef, useState, useEffect,useContext } from "react";
import { AvatarEditorImageContext } from "./avatar-editor-image-context";

interface IAvatarEditor {
  rotate: number;
  scaleValue: number;
  renderedImage: string;
  shape: "circle" | "rectangle";
}

// We have to fix the rotation it no longer centers it. We can look at our previous working code on github to fix it.
// I think the problem with the rotation is that it does not account for offscreenCanvas

const CustomAvatarEditor = ({
  rotate,
  scaleValue,
  renderedImage,
  shape,
}: IAvatarEditor) => {
  const { imageVal, setImageVal } = useContext(AvatarEditorImageContext);
  useEffect(() => {
    console.log('Updated imageVal:', imageVal);
  }, [imageVal]);
  

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });

  const [image, setImage] = useState(new Image());

  const initialCirclePos = { x: 219, y: 144 };
  const initialRadius = 119;
  const [circlePos, setCirclePos] = useState(initialCirclePos);
  const [radius, setRadius] = useState(initialRadius);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const rectWidth = radius * 3; // e.g., twice the radius
  const rectHeight = radius * 1.2; // e.g., 1.5 times the radius

  // Load the image and set initial position and scale
  useEffect(() => {
    const img = new Image();
    img.src = '/defaultavatarprofile.webp';
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
    console.log(scaleValue);
    centerImageInCircle();
  }, [scaleValue, circlePos, image]);
  // Modify the draw function to apply scaleValue

  const drawShape = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 5;

    if (shape === "circle") {
      ctx.beginPath();
      ctx.arc(circlePos.x, circlePos.y, radius, 0, Math.PI * 2);
      ctx.stroke();
    } else if (shape === "rectangle") {
      ctx.strokeRect(
        circlePos.x - rectWidth / 2,
        circlePos.y - rectHeight / 2,
        rectWidth,
        rectHeight
      );
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (canvas && image.complete) {
      const ctx = canvas.getContext("2d");
      const offscreenCanvas = document.createElement("canvas");
      const overlayCanvas = document.createElement("canvas");

      const offCtx = offscreenCanvas.getContext("2d");
      const overlayCtx = overlayCanvas.getContext("2d");

      if (ctx && offCtx && overlayCtx) {
        offscreenCanvas.width = canvas.width;
        offscreenCanvas.height = canvas.height;

        overlayCanvas.width = canvas.width;
        overlayCanvas.height = canvas.height;

        // Draw the original image with transformations
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        // CenterX and CenterY are logic for the rotation
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
        offCtx.fillStyle = "hsl(0, 0%, 60%)"; // This is black in HSL
        offCtx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
        offCtx.globalCompositeOperation = "source-over";

        // Set up the gray overlay using RGBA
        overlayCtx.fillStyle = "rgba(128, 128, 128, 0.8)"; // Gray color with 80% opacity
        overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);

        // Set the globalAlpha for the opacity
        offCtx.globalAlpha = 0.2; // Adjust the opacity to your preference
        offCtx.globalCompositeOperation = "destination-in";
        offCtx.drawImage(canvas, 0, 0); // Apply the opacity

        ctx.globalCompositeOperation = "destination-in";
        if (shape === "circle") {
          ctx.beginPath();
          ctx.arc(circlePos.x, circlePos.y, radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (shape === "rectangle") {
          ctx.beginPath();
          ctx.rect(
            circlePos.x - rectWidth / 2,
            circlePos.y - rectHeight / 2,
            rectWidth,
            rectHeight
          );
          ctx.fill();
        }

        ctx.globalCompositeOperation = "destination-over";
        ctx.drawImage(offscreenCanvas, 0, 0);

        // Reset the composite operation
        ctx.globalCompositeOperation = "source-over";
        // Optionally, redraw the circle border if needed
        drawShape(ctx);
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

    setImagePos({ x: newX, y: newY });
  };

  const cropImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return "Check Crop Image Function"

    const cropCanvas = document.createElement('canvas');
    const ctx = cropCanvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size based on shape
    if (shape === "circle") {
      cropCanvas.width = cropCanvas.height = radius * 2;
      ctx.beginPath();
      ctx.arc(radius, radius, radius, 0, Math.PI * 2);
      ctx.clip();
    } else if (shape === "rectangle") {
      cropCanvas.width = rectWidth;
      cropCanvas.height = rectHeight;
      ctx.rect(0, 0, rectWidth, rectHeight);
      ctx.clip();
    }

    // Calculate the position to draw the image
    const drawX = shape === "circle" ? -circlePos.x + radius : -circlePos.x + rectWidth / 2;
    const drawY = shape === "circle" ? -circlePos.y + radius : -circlePos.y + rectHeight / 2;

    // Draw the image portion onto the crop canvas
    ctx.drawImage(canvas, drawX, drawY);

    // Convert canvas to blob and then download
    cropCanvas.toBlob(blob => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'cropped-image.png'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 'image/png');
    const croppedImageUrl = cropCanvas.toDataURL('image/png');
    console.log(typeof croppedImageUrl)
    setImageVal(croppedImageUrl);
    console.log(imageVal)
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
      <button onClick={cropImage}>Download Cropped Image</button>

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
