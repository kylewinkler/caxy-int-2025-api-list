import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled.div`
  flex: 1;
  padding: 2rem 1rem;
`;

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </LayoutContainer>
  )
} 

export default Layout;