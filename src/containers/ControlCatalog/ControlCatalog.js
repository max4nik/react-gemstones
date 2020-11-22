import React from "react";
import CheckBox from "./CheckBox/CheckBox";
import { Control, ControlSection } from "./ControlCatalog.styled";
import PriceSlider from "./PriceSlider/PriceSlider";
import SearchSection from "./Search/SearchSection";

function ControlCatalog() {
  return (
    <Control>
      <ControlSection>
        <CheckBox />
        <PriceSlider />
        <SearchSection />
      </ControlSection>
    </Control>
  );
}

export default ControlCatalog;
