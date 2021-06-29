import React, { useEffect, useState } from "react";
import axios from "axios";
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
import CircularProgress from "@material-ui/core/CircularProgress";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { connect } from "react-redux";
import { addToCart } from "../../redux/shopping/shopping-actions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const url = "http://localhost:5000/gemstone";
let description =
  "        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.";
function ItemInfo({ id, addToCart }) {
  useEffect(() => {
    fetchItems();
    window.scrollTo(0, 0);
  }, []);
  const [isLoading, setLoading] = useState(false);
  const [gem, setGem] = useState([]);
  const fetchItems = async () => {
    const data = await axios(url + "/" + id);
    setGem(data.data);

    // for loading effect
    setLoading(true);
  };

  const [isTruncated, setIsTruncated] = useState(true);
  const resultDescription = isTruncated
    ? description.slice(0, 154)
    : description;
  const changeIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isLoading ? (
        <GemstoneBlock>
          <GemstoneImage src={gem.picture_link} />
          <GemstoneTextInfo>
            <GemstoneName>Gemstone Type: {gem.name}</GemstoneName>
            <GemstoneWeight>Weight: {gem.weight_in_carats} ct.</GemstoneWeight>
            <GemstonePrice>Buy for {gem.price_in_usd_dollars} $</GemstonePrice>
            <Link
              onClick={() => {
                addToCart(gem);
              }}
              to="/catalog"
            >
              <AddShoppingCartIcon
                style={{
                  margin: "1rem 0 0 2.5rem",
                  cursor: "pointer",
                  fontSize: "350%",
                }}
              />
            </Link>
          </GemstoneTextInfo>
          <GemstoneDescription>
            {resultDescription}
            <ReadMore onClick={changeIsTruncated}>
              {isTruncated ? "Read More >>>" : "<<< Read Less"}
            </ReadMore>
          </GemstoneDescription>
        </GemstoneBlock>
      ) : (
        <CircularProgress
          color="primary"
          style={{ margin: "14% 50% 14% 50%" }}
        />
      )}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (gemstone) => dispatch(addToCart(gemstone)),
  };
};

export default connect(null, mapDispatchToProps)(ItemInfo);
