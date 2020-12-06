import React, { useState, useEffect } from "react";
import { AllGemstones } from "./ItemsCatalog.styled";
import axios from "axios";
import GemstoneCatalogItem from "../../components/GemstoneCatalogItem/GemstoneCatalogItem";
import CircularProgress from "@material-ui/core/CircularProgress";

const url = "http://localhost:5000/gemstone";
function ItemsCatalog({ searchString, priceValues }) {
  useEffect(() => {
    fetchItems();
  }, [priceValues]);
  const [filteredItems, setfilteredItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchItems = async () => {
    const urlWithParams =
      url +
      "?" +
      "price_from=" +
      priceValues[0] +
      "&" +
      "price_to=" +
      priceValues[1];
    const data = await axios(urlWithParams);
    setfilteredItems(data.data);

    // for loading effect
    await new Promise((r) => setTimeout(r, 400));
    setLoading(true);
  };
  return (
    <AllGemstones>
      {isLoading ? (
        filteredItems
          .filter((gem) => {
            return gem.name.toLowerCase().includes(searchString.toLowerCase());
          })
          .map((gem, index) => (
            <GemstoneCatalogItem
              key={index}
              image={gem.picture_link}
              title={gem.name}
              price={gem.price_in_usd_dollars}
              weight={gem.weight_in_carats}
              id={gem.id}
            />
          ))
      ) : (
        <CircularProgress
          color="primary"
          style={{ marginLeft: "50%", marginTop: "7%", marginBottom: "7%" }}
        />
      )}
    </AllGemstones>
  );
}

export default ItemsCatalog;
