import React, { useState } from "react";
import ControlCatalog from "../containers/ControlCatalog/ControlCatalog";
import ItemsCatalog from "../containers/ItemsCatalog/ItemsCatalog";
const Catalog = () => {
  const [searchGem, setSearchGem] = useState("");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  let handleInput = (e) => {
    setSearchGem(e.target.value);
  };
  return (
    <>
      <ControlCatalog
        handleInput={handleInput}
        setPriceRange={setPriceRange}
      ></ControlCatalog>
      <ItemsCatalog searchString={searchGem} priceValues={priceRange} />
    </>
  );
};

export default Catalog;
