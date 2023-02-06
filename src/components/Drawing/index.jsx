import React, { useState } from 'react';
import { Canvas } from '../Canvas';
import { Container } from '../Recorder/styles';
import { Button } from '../Button';
import { TbPencil } from "react-icons/tb";

export const Drawing = () => {
  const [isDrawing, setIsDrawing] = useState(false);

    return (
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <Container>
          <Button
            className="drawBtn"
            color="transparent"
            onClick={() => setIsDrawing(!isDrawing)}
          >
            <TbPencil size={30} className="noteIcon" />
          </Button>
        </Container>
        {isDrawing && (
          <Canvas
            bgColor="rgba(255, 255, 255, 0.6)"
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
          />
        )}
      </div>
    );
}