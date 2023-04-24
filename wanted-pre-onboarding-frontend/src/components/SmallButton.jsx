import styled from 'styled-components';
import { palette } from '../styles/palette';

const SmallButton = ({ varient, onClick, data_testid, children, value }) => {
  return (
    <StSmallButton
      data-testid={data_testid}
      varient={varient}
      onClick={onClick}
      value={value}
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
  background-color: ${(props) =>
    props.varient === 'outlined' ? palette.white : palette.mainColor};
  color: ${(props) =>
    props.varient === 'outlined' ? palette.mainColor : palette.white};
  border: ${(props) =>
    props.varient === 'outlined' ? `1px solid ${palette.mainColor}` : 'none'};
`;
