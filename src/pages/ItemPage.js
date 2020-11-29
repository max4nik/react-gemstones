import React from "react";
import ItemInfo from "../containers/ItemInfo/ItemInfo";

function ItemPage(props) {
  return (
    <>
      <ItemInfo id={props.match.params.id} />
    </>
  );
}

export default ItemPage;
