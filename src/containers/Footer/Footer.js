import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {
  FooterContainer,
  Email,
  Socials,
  FooterInfo,
  CopyrightText,
} from "./Footer.styled";
import { GemLogo } from "../../components/Logo/Logo.styled";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <Email>gemss@gmail.com</Email>
        <GemLogo href="/" style={{ marginLeft: 0 }}>
          GemsS
        </GemLogo>
        <Socials>
          <InstagramIcon
            style={{ fontSize: 40, color: "white", cursor: "pointer" }}
          />
          <FacebookIcon
            style={{ fontSize: 40, color: "white", cursor: "pointer" }}
          />
          <YouTubeIcon
            style={{ fontSize: 40, color: "white", cursor: "pointer" }}
          />
        </Socials>
      </FooterInfo>
      <CopyrightText>
        Copyright © 2020 GemsShop.com - All Rights Reserved
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
