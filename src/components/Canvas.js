import React, { useEffect } from "react";
import { useCanvas } from "../context/CanvasContext";

export function Canvas({ bgColor = "#456" }) {
  const { canvasRef, prepareCanvas, startDrawing, finishDrawing, draw, color } =
    useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, [color]);

  return (
    <canvas
      className="canvas"
      style={{ backgroundColor: bgColor }}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}