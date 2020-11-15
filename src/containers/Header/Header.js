import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  UserOptions,
} from "./Header.styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";

const Header = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">GemsS</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="catalog">Catalog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About Us</NavLinks>
            </NavItem>
          </NavMenu>
          <UserOptions>
            <ShoppingCartIcon style={{ fontSize: 40, color: "white" }} />
            <PersonIcon
              style={{ fontSize: 40, color: "white", marginLeft: 30 }}
            />
          </UserOptions>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
