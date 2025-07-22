import React from 'react';
import styled from 'styled-components';
import Row from '../../components/Row/Row';
import Col from '../../components/Column/Column';

const HomeWrapper = styled.div`
  display: flex;
`;

const Home = () => {

  return (
    <HomeWrapper>
      <Row>
        2025 Interns API Listing
      </Row>
      <Row>
        <Col>
          Left
        </Col>
        <Col>
          Right
        </Col>
      </Row>
    </HomeWrapper>
  )
}

export default Home;