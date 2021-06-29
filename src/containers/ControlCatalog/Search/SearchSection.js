import React from "react";
import { Search } from "./SearchSection.styled";
function SearchSection({ handleInput }) {
  return <Search onChange={handleInput} placeholder="Type to search..." />;
}

export default SearchSection;
