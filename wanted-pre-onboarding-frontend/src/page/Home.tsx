import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <PageLayout title={'홈화면'}>
      <StUl>
        <li>
          <Link to='/signup'>go to signup</Link>
        </li>
        <li>
          <Link to='/signin'>go to signin</Link>
        </li>
        <li>
          <Link to='/todo'>go to todo</Link>
        </li>
      </StUl>
    </PageLayout>
  );
};

export default Home;

const StUl = styled.ul`
  display: flex;
  margin-bottom: 24px;
  li {
    font-weight: 600;
    margin-right: 16px;
  }
`;
