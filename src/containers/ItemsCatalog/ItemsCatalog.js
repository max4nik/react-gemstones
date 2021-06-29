import React, { useState, useEffect } from "react";
import { AllGemstones } from "./ItemsCatalog.styled";
import axios from "axios";
import GemstoneCatalogItem from "../../components/GemstoneCatalogItem/GemstoneCatalogItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import { currentState } from "../../redux/shopping/shopping-reducer";
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
    setLoading(true);
  };

  const getArrayFromIds = (array) => {
    let arrayFromIds = [];
    array.map((gem) => arrayFromIds.push(gem.id));
    return arrayFromIds;
  };
  let arrayFromIdsFromCart = getArrayFromIds(currentState.gemstonesProducts);

  const showGemstones = () => {
    return (
      <AllGemstones>
        {isLoading ? (
          filteredItems
            .filter((gem) => {
              return !arrayFromIdsFromCart.includes(gem.id);
            })
            .filter((gem) => {
              return gem.name
                .toLowerCase()
                .includes(searchString.toLowerCase());
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
  };

  return showGemstones();
}

export default ItemsCatalog;
