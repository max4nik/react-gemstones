import React from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  UserOptions,
} from "./Header.styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import { GemLogo } from "../../components/Logo/Logo.styled";

const Header = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <GemLogo to="/">GemsS</GemLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/catalog">Catalog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About Us</NavLinks>
            </NavItem>
          </NavMenu>
          <UserOptions>
            <ShoppingCartIcon
              style={{ fontSize: 40, color: "white", cursor: "pointer" }}
            />
            <PersonIcon
              style={{
                fontSize: 40,
                color: "white",
                marginLeft: 30,
                cursor: "pointer",
              }}
            />
          </UserOptions>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
