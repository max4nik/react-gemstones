import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  UserOptions,
} from "./Header.styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { GemLogo } from "../../components/Logo/Logo.styled";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const logoutUser = () => {
    localStorage.removeItem("email-local");
    localStorage.removeItem("password-local");
    setIsLogged(false);
  };
  useEffect(() => {
    checkLogged();
    console.log();
  }, [isLogged]);
  const checkLogged = () => {
    const username = localStorage.getItem("email-local");
    const password = localStorage.getItem("password-local");
    if (username != null && password != null) {
      if (isLogged == false) {
        setIsLogged(true);
      }
    }
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <GemLogo to="/">GemsS</GemLogo>
          {isLogged ? (
            <>
              <NavMenu>
                <NavItem>
                  <NavLinks to="/">Home</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/catalog">Catalog</NavLinks>
                </NavItem>
              </NavMenu>
              <UserOptions>
                <Link to="/cart">
                  <ShoppingCartIcon
                    style={{ fontSize: 40, color: "white", cursor: "pointer" }}
                  />
                </Link>
                <Link to="/login" onClick={logoutUser}>
                  <LogoutIcon
                    style={{
                      fontSize: 40,
                      color: "white",
                      marginLeft: 30,
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </UserOptions>
            </>
          ) : (
            <></>
          )}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
