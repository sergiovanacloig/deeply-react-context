import useSearch from "../context/Search/useSearch";

const Search = () => {
  const { search } = useSearch();

  console.log("RENDER SEARCH");

  return <span className="wrapper">Search value: {search}</span>;
};

export default Search;
