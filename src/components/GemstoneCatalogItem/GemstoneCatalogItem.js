import { Button } from "antd";
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
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const GemstoneCatalogItem = ({ image, title, price, weight }) => {
  return (
    <Item>
      <GemstoneImage src={image} />
      <Title>{title}</Title>
      <Info>
        <Price>{price} $</Price>
        <Weight>{weight} ct</Weight>
      </Info>
      <Options>
        <ItemButton>Learn more</ItemButton>
        <AddShoppingCartIcon
          style={{ marginRight: "2rem", cursor: "pointer" }}
          fontSize="large"
        />
      </Options>
    </Item>
  );
};

export default GemstoneCatalogItem;
