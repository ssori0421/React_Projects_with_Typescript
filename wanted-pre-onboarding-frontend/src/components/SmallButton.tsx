import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { palette } from '../styles/palette';

type Varient = 'outlined' | 'fill';

const SmallButton = ({
  varient = 'fill',
  onClick,
  data_testid,
  children,
  value,
}: {
  varient?: Varient;
  onClick?: any;
  data_testid?: string;
  children?: ReactNode;
  value?: string | number;
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
  background-color: ${(props: { varient: Varient }) =>
    props.varient === 'outlined' ? palette.white : palette.mainColor};
  color: ${(props: { varient: Varient }) =>
    props.varient === 'outlined' ? palette.mainColor : palette.white};
  border: ${(props: { varient: Varient }) =>
    props.varient === 'outlined' ? `1px solid ${palette.mainColor}` : 'none'};
`;
