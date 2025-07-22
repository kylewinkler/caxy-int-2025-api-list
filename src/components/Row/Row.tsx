import React, { ReactNode } from 'react';
import styled from 'styled-components';

const RowWrapper = styled.div`
  display: flex;
`;

interface RowProps {
  children: ReactNode
}

const Row = ({children}: RowProps) => (
  <RowWrapper>
    {children}
  </RowWrapper>
)

export default Row;