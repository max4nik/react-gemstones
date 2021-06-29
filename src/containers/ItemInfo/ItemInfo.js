import React, { useEffect, useState } from "react";
import {
  GemstoneBlock,
  GemstoneImage,
  GemstoneName,
  GemstoneWeight,
  GemstonePrice,
  GemstoneTextInfo,
  GemstoneDescription,
  ReadMore,
} from "./ItemInfo.styled";
import RubyImage from "../../icons/ruby.png";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const url = "http://localhost:5000/gemstone";
let description =
  "        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.";
function ItemInfo({ id }) {
  useEffect(() => {
    fetchItems();
  }, []);
  const [item, setItem] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(url + "/" + id);
    const item = await data.json();
    setItem(item);
  };

  const [isTruncated, setIsTruncated] = useState(true);
  const resultDescription = isTruncated
    ? description.slice(0, 154)
    : description;
  const changeIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <GemstoneBlock>
      <GemstoneImage src={RubyImage} />
      <GemstoneTextInfo>
        <GemstoneName>Gemstone Type: {item.name}</GemstoneName>
        <GemstoneWeight>Weight: {item.weight_in_carats} ct.</GemstoneWeight>
        <GemstonePrice>Buy for {item.price_in_usd_dollars} $</GemstonePrice>
        <AddShoppingCartIcon
          style={{ marginTop: "0.5rem", cursor: "pointer", fontSize: "275%" }}
        />
      </GemstoneTextInfo>
      <GemstoneDescription>
        {resultDescription}
        <ReadMore onClick={changeIsTruncated}>
          {isTruncated ? "Read More >>>" : "<<< Read Less"}
        </ReadMore>
      </GemstoneDescription>
    </GemstoneBlock>
  );
}

export default ItemInfo;
