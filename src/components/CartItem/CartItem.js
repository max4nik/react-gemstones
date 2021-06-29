import React, { useState } from "react";
import {
  Item,
  GemstoneImage,
  Title,
  Info,
  Price,
  Weight,
} from "./CartItem.styled";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import { connect } from "react-redux";
import { removeFromCard } from "../../redux/shopping/shopping-actions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CartItem({ image, title, price, weight, id, removeFromCard }) {
  const [showGemstone, setShowGemstone] = useState(true);
  return (
    <div>
      {showGemstone ? (
        <Item>
          <GemstoneImage src={image} />
          <Info>
            <Title>{title}</Title>
            <Price>{price} $</Price>
            <Weight>{weight} ct</Weight>
            <Link
              onClick={() => {
                removeFromCard(id);
                setShowGemstone(false);
              }}
              to="/cart"
            >
              <RemoveShoppingCart
                style={{
                  marginTop: "1rem",
                  cursor: "pointer",
                  fontSize: "250%",
                }}
              />
            </Link>
          </Info>
        </Item>
      ) : null}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCard: (id) => dispatch(removeFromCard(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
