import { NavLinkStyled } from './Nav.styled';

export const Nav = () => {
  return (
    <>
      <NavLinkStyled to="/news">News</NavLinkStyled>
      <NavLinkStyled to="/notices/sell">Find pet</NavLinkStyled>
      <NavLinkStyled to="/friends">Our friends</NavLinkStyled>
    </>
  );
};
