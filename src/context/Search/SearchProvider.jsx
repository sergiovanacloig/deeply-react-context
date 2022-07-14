import { useState } from "react";
import SearchContext from "./SearchContext";

const SearchProvider = (props) => {
  const [search, setSearch] = useState('Default text');
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  }

  return <SearchContext.Provider value={{ search, counter, setSearch, increase }} {...props} />;
};

export default SearchProvider;
