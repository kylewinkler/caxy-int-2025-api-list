import React from 'react';
import styled from 'styled-components';
import { useTheme } from './layout.context';
import Switch from "react-switch";

const HeaderWrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: #edeeef;
  color: #282c34;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderWrapper>
      <div>
        Links
      </div>
      <div>
        <Switch onChange={toggleTheme} checked={theme === 'dark'} onColor='#282c34' />
      </div>
    </HeaderWrapper>
  )
}

export default Header;