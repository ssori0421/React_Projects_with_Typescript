import React from 'react';
import styled from 'styled-components';

const PageLayout = ({ children, title }: { children: any; title: any }) => {
  return (
    <PageContainer>
      <StTitle>{title}</StTitle>
      {children}
    </PageContainer>
  );
};
export default PageLayout;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const StTitle = styled.h2`
  font-size: 1.5rem;
  margin: 16px 0px 32px;
`;
