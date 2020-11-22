import React from "react";
import WhyUsItem from "../../components/WhyUsItem/WhyUsItem";
import { WhyUsContainer, WhyUsPoints, WhyUsTitle } from "./WhyUs.styled";
import MedalImage from "../../icons/medal.svg";
import WorldwideShippingImage from "../../icons/worldwide.svg";
import CustomerServiceImage from "../../icons/customer-service.svg";
import VarietyImage from "../../icons/variety.svg";
import { ButtonPB } from "../../components/ButtonPurpleBlue/ButtonPurpleBlue.styled";

const WhyUs = () => {
  return (
    <WhyUsContainer>
      <WhyUsTitle>Why Us?</WhyUsTitle>
      <WhyUsPoints>
        <WhyUsItem image={MedalImage} text={"Lab Certified"} />
        <WhyUsItem image={WorldwideShippingImage} text={"Worldwide Shipping"} />
        <WhyUsItem image={VarietyImage} text={"Huge Variety"} />
        <WhyUsItem
          image={CustomerServiceImage}
          text={"Customer Support 24/7"}
        />
      </WhyUsPoints>
      <ButtonPB to="/about" style={{ marginBottom: "2rem" }}>
        About Us
      </ButtonPB>
    </WhyUsContainer>
  );
};

export default WhyUs;
