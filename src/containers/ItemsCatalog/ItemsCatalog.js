import React, { useState, useEffect } from "react";
import RubyImage from "../../icons/ruby.png";
import { AllGemstones } from "./ItemsCatalog.styled";
import GemstoneCatalogItem from "../../components/GemstoneCatalogItem/GemstoneCatalogItem";
const url = "http://localhost:5000/gemstone";

function ItemsCatalog({ searchString, priceValues }) {
  useEffect(() => {
    fetchItems();
  }, []);
  const [filteredItems, setfilteredItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(url);
    const items = await data.json();
    setfilteredItems(items);
  };
  return (
    <AllGemstones>
      {filteredItems
        .filter((gem) => {
          return gem.name.toLowerCase().includes(searchString.toLowerCase());
        })
        .filter((gem) => {
          return (
            gem.price_in_usd_dollars <= priceValues[1] &&
            gem.price_in_usd_dollars >= priceValues[0]
          );
        })
        .map((gem, index) => (
          <GemstoneCatalogItem
            key={index}
            image={RubyImage}
            title={gem.name}
            price={gem.price_in_usd_dollars}
            weight={gem.weight_in_carats}
            id={gem.id}
          />
        ))}
    </AllGemstones>
  );
}

export default ItemsCatalog;
