import React from 'react';
import { StyledButton } from './styles';

export const Button = ({ children, type, color, onClick, ...props }) => {
    return <StyledButton type={type} color={color} onClick={onClick}>
        {children}
    </StyledButton>
}