import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { Container } from 'components/App/App.styled';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  const theme = useTheme();
  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <LinkWrapper>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/country">Countries</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>
      <Outlet />
    </>
  );
};
export default Header;
