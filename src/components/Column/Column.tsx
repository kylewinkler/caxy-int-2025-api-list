import React, { ReactNode } from 'react';
import styled from 'styled-components';

const getWidth = (size?: SizeTypes) => size ? `${(size / 12) * 100}` : '100%';

const ColWrapper = styled.div<{$xs?: SizeTypes, $sm?: SizeTypes, $md?: SizeTypes, $lg?: SizeTypes, $xl?: SizeTypes}>`
  display: flex;
  width: ${({ $xs }) => getWidth($xs)};
`;

type SizeTypes =  1 | 2 | 3 | 4 | 6 | 12;

interface ColProps {
  xs?: SizeTypes;
  sm?: SizeTypes;
  md?: SizeTypes;
  lg?: SizeTypes;
  xl?: SizeTypes;
  children: ReactNode
}

const Col = ({children, xs, sm, md, lg, xl}: ColProps) => (
  <ColWrapper $xs={xs} $sm={sm} $md={md} $lg={lg} $xl={xl}>
    {children}
  </ColWrapper>
)

export default Col;