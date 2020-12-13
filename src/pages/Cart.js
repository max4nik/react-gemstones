import CartItem from "../components/CartItem/CartItem";

import { connect } from "react-redux";
import { useState } from "react";
import { ButtonPB } from "../components/ButtonPurpleBlue/ButtonPurpleBlue.styled";
function Cart({ gemstonesProducts }) {
  const [gemstones, setGemstones] = useState(gemstonesProducts);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ color: "white" }}>
        Total price:
        {gemstones.forEach((gem) => {
          console.log(gem.price_in_usd_dollars);
        })}
      </h2>
      <ButtonPB
        to="buy"
        style={{
          width: "219px",
          alignSelf: "center",
          marginTop: "1.8rem",
          marginBottom: "3rem",
        }}
      >
        Buy All Now!
      </ButtonPB>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "left",
        }}
      >
        {gemstonesProducts.map((gem, index) => (
          <CartItem
            key={index}
            image={gem.picture_link}
            title={gem.name}
            price={gem.price_in_usd_dollars}
            weight={gem.weight_in_carats}
            id={gem.id}
            currentGemstones={gemstones}
            setGemstones={setGemstones}
            totalPrice={totalPrice}
          />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    gemstonesProducts: state.shop.gemstonesProducts,
  };
};
export default connect(mapStateToProps)(Cart);
