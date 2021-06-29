import React from "react";
import {
  Item,
  Image,
  Info,
  Title,
  Description,
  PriceFrom,
} from "./GemstonePreviewItem.styled";

const GemstoneItem = ({ title, description, priceFrom, image }) => {
  return (
    <Item>
      <Image src={image} />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PriceFrom to={"/catalog"}>{priceFrom}</PriceFrom>
      </Info>
    </Item>
  );
};

export default GemstoneItem;
