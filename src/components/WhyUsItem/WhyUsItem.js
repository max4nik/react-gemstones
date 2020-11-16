import React from "react";
import {
  WhyUsItemContainer,
  WhyUsItemImage,
  WhyUsItemTitle,
} from "./WhyUsItem.styled";

const WhyUsItem = ({ image, text }) => {
  return (
    <WhyUsItemContainer>
      <WhyUsItemImage src={image} />
      <WhyUsItemTitle>{text}</WhyUsItemTitle>
    </WhyUsItemContainer>
  );
};

export default WhyUsItem;
