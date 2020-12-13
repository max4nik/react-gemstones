import React from "react";
import {
  Item,
  GemstoneImage,
  Title,
  Options,
  Price,
  Weight,
  Info,
  ItemButton,
} from "./GemstoneCatalogItem.styled";

const GemstoneCatalogItem = ({ image, title, price, weight, id }) => {
  return (
    <Item>
      <GemstoneImage src={image} />
      <Title>{title}</Title>
      <Info>
        <Price>{price} $</Price>
        <Weight>{weight} ct</Weight>
      </Info>
      <Options>
        <ItemButton to={`/catalog/${id}`}>Learn more</ItemButton>
      </Options>
    </Item>
  );
};

export default GemstoneCatalogItem;
