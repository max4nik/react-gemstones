import React from "react";
import RubyImage from "../../icons/ruby.png";
import { AllGemstones } from "./ItemsCatalog.styled";
import GemstoneCatalogItem from "../../components/GemstoneCatalogItem/GemstoneCatalogItem";
const url = "http://localhost:5000/gemstone";
let gemstones = [];

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      gemstones.push(data[i]);
    }
    renderAllItems();
  });

const renderAllItems = () =>
  gemstones.map((gem, index) => {
    return (
      <GemstoneCatalogItem
        key={index}
        image={RubyImage}
        title={gem.name}
        price={gem.price_in_usd_dollars}
        weight={gem.weight_in_carats}
      />
    );
  });

function ItemsCatalog() {
  return <AllGemstones>{renderAllItems()}</AllGemstones>;
}

export default ItemsCatalog;
