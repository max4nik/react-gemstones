import React from "react";
import ControlCatalog from "../containers/ControlCatalog/ControlCatalog";
import ItemsCatalog from "../containers/ItemsCatalog/ItemsCatalog";

const Catalog = () => {
  return (
    <div>
      <ControlCatalog></ControlCatalog>
      <ItemsCatalog />
    </div>
  );
};

export default Catalog;
