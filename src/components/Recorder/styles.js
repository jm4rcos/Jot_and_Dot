import styled, { css } from 'styled-components';
import { themes } from '../../themes/themes';

export const RecorderContainer = styled.div`
  background: transparent;
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
  height: auto;
  padding: 20px;
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props) =>
    props.opacity && props.isRecording === true && props.opacity};
  &:hover{
    opacity: 1}
  }
  gap: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .example-thumb {
    cursor: pointer;
    position: absolute;
    z-index: 100;
    background: #ffffff;
    border: 5px solid #4caf50;
    border-radius: 100%;
    display: block;
    box-shadow: 0 0 2px 0 rgb(0 0 0 / 44%);
  }
  .example-thumb.active {
    background-color: grey;
  }
  .example-track {
    position: relative;
    background: #fff;
  }
  .example-track.example-track-0 {
    background: #4caf50;
  }
  .horizontal-slider .example-track {
    top: 20px;
    height: 4px;
  }
  .horizontal-slider .example-thumb {
    top: 12px;
    width: 10px;
    outline: none;
    height: 10px;
    line-height: 38px;
  }

  /* ${(props) =>
    props.isRecording === true
      ? css`
          opacity: ${props.opacity};
        `
      : css`
          opacity: 0.2;
        `} */
`;

export const Container = styled.div`
  margin-top: 20px;
  height: auto;
  width: ${(props) => props.width || `40px`};
  padding: 8px;
  border-radius: ${(props) => props.radius || "30px"};
  background-color: ${themes.dark.colors.background};
  gap: 8px;

  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: center;
  justify-content: center;
  position: ${(props) => props.position || "relative"};
  margin: 0 auto;
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  top: ${(props) => props.top || "auto"};
  right: ${(props) => props.right || "auto"};

  transition: width 0.2s ease-in-out;

  & .noteIcon {
    color: ${themes.light.colors.background};
  }

  & .opacityContainer {
    position: absolute;
    height: 50px;
    width: 0;
    padding-inline: 0;
    padding-right: 0;
    left: 44px;
    bottom: 0;
    background-color: ${themes.dark.colors.background};
    border-radius: 30px;
    margin-left: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    left: 10px;

    z-index: -1;

    transition: all 0.5s ease-in-out;
    .horizontal-slider {
      display: none;
    }
  }

  &:hover .opacityContainer.show {
    width: 150px;
    padding-inline: 10px;
    padding-right: 20px;
    left: 0;

    .horizontal-slider {
      display: flex;
      width: 100%;
      max-width: 500px;
      height: 100%;
      margin: auto;
      margin-left: 50px;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
      /* padding-left: 44px */

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Stop = styled.div`
    height: 22px;
    width: 22px;
    border-radius: 4px;
    background-color: ${ themes.dark.colors.dangerLight };
`;

export const TimeTracking = styled.p`
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    color: ${ themes.light.colors.background };
    font-weight: 500;
`;

export const Start = styled.div`

`;

export const View = styled.div`
  height: 100vh;

  background-color: ${themes.dark.colors.active};
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Video = styled.video`
  height: 100%; width: 100% ;
  position: absolute;
  left: 0; top:0 ;
`;

export const Line = styled.div`
  height: 4px;
  width: 90%;
  background-color: #b8b8ba;
  border-radius: 4px;
  margin-block: 6px;
`;


export const TimeControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: transparent;

  .time_progressbarContainer {
    background-color: gray;
    border-radius: 15px;
    width: 75%;
    height: 5px;
    z-index: 30;
    position: relative;
    margin: 0 20px;
    z-index: 200;
  }

  .time_progressBar {
    border-radius: 15px;
    background-color: indigo;
    width: 100%;
    height: 6px;
    z-index: 200;
  }

  .controlsTime {
    color: white;
    z-index: 200;
  }
`;

export const VideoContainer = styled.div`
  height: 550px;
  width: 60%;

  & video {
    height: 100%;
    width: 100%;
  }
`

export const VideoSettings = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.2s ease-in-out;

  &:hover .videoSettingsChilren {
  }

  .videoSettingsChilren {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%);
  }
`;

