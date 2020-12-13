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
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <FooterContainer>
      <FooterInfo>
        <Email>gemss@gmail.com</Email>
        <GemLogo onClick={scrollUp} style={{ marginRight: "3.55rem" }}>
          GemsS
        </GemLogo>
        <Socials>
          <a href="https://www.instagram.com/" target="blank">
            <InstagramIcon
              style={{ fontSize: 40, color: "white", cursor: "pointer" }}
            />
          </a>
          <a href="https://www.facebook.com/" target="blank">
            <FacebookIcon
              style={{ fontSize: 40, color: "white", cursor: "pointer" }}
            />
          </a>
          <a href="https://www.youtube.com/" target="blank">
            <YouTubeIcon
              style={{ fontSize: 40, color: "white", cursor: "pointer" }}
            />
          </a>
        </Socials>
      </FooterInfo>
      <CopyrightText>
        Copyright © 2020 GemsShop.com - All Rights Reserved
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
