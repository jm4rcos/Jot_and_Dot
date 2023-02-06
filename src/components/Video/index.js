import React, { useRef } from 'react';
import {
  StyledVideo,
  VideoContainer,
} from "./styles";

export const Video = ({ mediaBlobUrl }) => {

  const videoRef = useRef(null);

  return (
    <VideoContainer>
      <StyledVideo ref={videoRef} src={mediaBlobUrl} />
      {/* <div className="additionalControls">
        <Button
          onClick={() => videoRef.current.requestFullscreen()}
          color="transparent"
        >
          {document.fullscreenElement ? <MdFullscreenExit /> : <MdFullscreen />}
        </Button>
        <Button color="transparent">
          <FiDownload />
        </Button>
      </div> */}

      {/* <ControlsContainer>
        <div className="controls">
          <Button onClick={backward} color="transparent">
            <AiFillBackward />
          </Button>
          <Button onClick={togglePlaying} color="transparent">
            {playing ? <FaPause /> : <FaPlay />}
          </Button>
          <Button onClick={forward} color="transparent">
            <AiFillForward />
          </Button>
        </div>
      </ControlsContainer>
      <TimeControls>
        <p className="controlsTime">
          {Math.floor(currentTime / 60) +
            ":" +
            ("0" + Math.floor(currentTime % 60)).slice(-2)}
        </p>
        <div className="time_progressbarContainer">
          <div className="time_progressBar"></div>
        </div>
        <p className="controlsTime">
          {Math.floor(videoTime / 60) +
            ":" +
            ("0" + Math.floor(videoTime % 60)).slice(-2)}
        </p>
      </TimeControls> */}
    </VideoContainer>
  );
};