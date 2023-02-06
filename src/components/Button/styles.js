import styled from 'styled-components';
import { themes } from '../../themes/themes';

export const StyledButton = styled.button`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: ${(props) =>
    props.color ? props.color : themes.light.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  /* &:hover {
    background-color: ${themes.light.colors.background};
  } */
`;