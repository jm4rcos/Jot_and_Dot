import React, { useEffect, useRef } from 'react';
import {
  useReactMediaRecorder,
} from "react-media-recorder";
import ReactSlider from "react-slider";
import Draggable from "react-draggable";
import {
  View,
  Container,
  Stop,
  TimeTracking,
  Line,
  RecorderContainer,
  VideoContainer,
} from "./styles";
import { Button } from '../Button';
import { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import {
  AiFillDelete,
  AiOutlineAudioMuted,
  AiOutlineAudio,
} from "react-icons/ai";
import { themes } from '../../themes/themes';
import {
  MdOutlineStickyNote2,
  MdOutlineVideoSettings,
  MdOutlineBrightness6,
} from "react-icons/md";
import { Video } from '../Video';
import { TbPencil } from 'react-icons/tb';

export const RecorderWrapper = () => {
  const [hasAudio, setHasAudio] = useState(true);
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ screen: true, audio: hasAudio });

  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [isHoreving, setIsHoreving] = useState(false);
  const [isOpacityClicked, setIsOpacityClicked] = useState(false);

  const opacity = sliderValue / 100;

  const intervalRef = useRef();

  useEffect(() => {
    if (status === "recording") {
      intervalRef.current = setInterval(() => {
        setRecordingTime(recordingTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [status, recordingTime]);

  return (
    <View>
      <Draggable bounds="parent">
        <RecorderContainer
          opacity={opacity}
          isRecording={isRecording}
          isHoreving={isHoreving}
        >
          {status === "recording" && (
            <>
              <Container>
                <Button className="drawBtn" color="transparent">
                  <TbPencil size={30} className="noteIcon" />
                </Button>
              </Container>
              <Container>
                <Button className="noteBtn" color="transparent">
                  <MdOutlineStickyNote2 size={30} className="noteIcon" />
                </Button>
              </Container>
            </>
          )}

          <Container>
            {status === "recording" ? (
              <Button
                onClick={() => {
                  stopRecording();
                  setIsRecording(!isRecording);
                  setRecordingTime(0);
                }}
              >
                <Stop />
              </Button>
            ) : (
              <Button
                onClick={() => {
                  startRecording();
                  setIsRecording(!isRecording);
                }}
              >
                <FaPlay
                  color={themes.dark.colors.dangerLight}
                  size={20}
                  style={{ marginLeft: "3px" }}
                />
              </Button>
            )}

            {status === "recording" && (
              <TimeTracking>
                {`${Math.round(recordingTime / 60)}:${Math.round(
                  recordingTime % 60
                )
                  .toString()
                  .padStart(2, "0")}`}
              </TimeTracking>
            )}
            <Line />
            <Button className="deleteBtn" color="transparent">
              <AiFillDelete size={30} className="deleteIcon" />
            </Button>

            {status !== "recording" && (
              <Button
                color={!hasAudio ? null : "transparent"}
                onClick={() => setHasAudio(!hasAudio)}
              >
                {hasAudio ? (
                  <AiOutlineAudio size={30} />
                ) : (
                  <AiOutlineAudioMuted size={30} />
                )}
              </Button>
            )}
            <Button
              color="transparent"
              onClick={() => setIsOpacityClicked(!isOpacityClicked)}
              style={{ zIndex: 1 }}
            >
              <MdOutlineBrightness6 size={30} />
            </Button>
            <div
              className={`opacityContainer ${isOpacityClicked ? "show" : ""}`}
            >
              <ReactSlider
                value={sliderValue}
                onChange={setSliderValue}
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
              />
            </div>
          </Container>
        </RecorderContainer>
      </Draggable>
      {/* {mediaBlobUrl && <Video status={status} mediaBlobUrl={mediaBlobUrl} />} */}
      {/* {mediaBlobUrl && <Video mediaBlobUrl={mediaBlobUrl} />} */}
      {/* <Video mediaBlobUrl={mediaBlobUrl} controls/> */}
      <VideoContainer>
        {mediaBlobUrl && status !== "recording" && (
          <video src={mediaBlobUrl} controls autoplay />
        )}
      </VideoContainer>
    </View>
  );
};