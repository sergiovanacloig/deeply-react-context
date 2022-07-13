import { useState } from "react";
import SearchContext from "./SearchContext";

const SearchProvider = (props) => {
  const [search, setSearch] = useState('Default text');

  return <SearchContext.Provider value={{ search, setSearch }} {...props} />;
};

export default SearchProvider;
