import React from 'react';
import styled from 'styled-components';
import { palette } from '../styles/palette';

const SmallButton = ({
  varient,
  onClick,
  data_testid,
  children,
  value,
}: {
  varient: any;
  onClick: any;
  data_testid: any;
  children: any;
  value: any;
}) => {
  return (
    <StSmallButton
      data-testid={data_testid}
      onClick={onClick}
      value={value}
      varient={varient}
    >
      {children}
    </StSmallButton>
  );
};

export default SmallButton;

const StSmallButton = styled.button`
  border: 1px solid ${palette.black};
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
  background-color: ${(props: { varient: any }) =>
    props.varient === 'outlined' ? palette.white : palette.mainColor};
  color: ${(props: { varient: any }) =>
    props.varient === 'outlined' ? palette.mainColor : palette.white};
  border: ${(props: { varient: any }) =>
    props.varient === 'outlined' ? `1px solid ${palette.mainColor}` : 'none'};
`;
