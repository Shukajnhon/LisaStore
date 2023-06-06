import React from 'react';
import styled from 'styled-components';
export const Button = ({
  label,
  width,
  height,
  textColor,
  bgColor,
  borderColor,
  borderRadius,
  children,
  ...rest
}) => {
  return (
    <ButtonStyle
      label={label}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      {...rest}
    >
      <span className="btn-title">{label}</span>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  cursor: pointer;
`;

Button.defaultProps = {
  bgColor: '#1E2832',
  textColor: '#ffff',
  width: '128px',
  height: '46px',
  borderRadius: '40px',
  fontSize: '16px',
};
