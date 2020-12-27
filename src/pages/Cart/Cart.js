import CartItem from "../../components/CartItem/CartItem";
import EmptyBoxImage from "../../icons/empty_box.png";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { ButtonPB } from "../../components/ButtonPurpleBlue/ButtonPurpleBlue.styled";
import { Link } from "react-router-dom";
const Cart = ({ gemstonesProducts }) => {
  const [gemstones, setGemstones] = useState(gemstonesProducts);
  const [isEmpty, setIsEmpty] = useState();
  useEffect(() => {
    setIsEmpty(gemstones.length === 0);
  }, []);

  return (
    <div>
      {isEmpty ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "3rem",
            }}
          >
            <img
              src={EmptyBoxImage}
              style={{
                marginTop: "3rem",
                maxHeight: "600px",
                maxWidth: "600px",
              }}
            />
            <h1 style={{ color: "white" }}>Your cart is empty :(</h1>
            <h1 style={{ color: "white", marginTop: "2rem", fontSize: "145%" }}>
              Go to{" "}
              <Link
                to="catalog"
                style={{ textDecoration: "none", color: "blueviolet" }}
              >
                Catalog
              </Link>{" "}
              to view and buy gemstones
            </h1>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ButtonPB
            to="checkout"
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
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    gemstonesProducts: state.shop.gemstonesProducts,
  };
};
export default connect(mapStateToProps)(Cart);
