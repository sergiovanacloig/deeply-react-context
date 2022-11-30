import useSearch from "../context/Search/useSearch";

const Header = () => {
  const { search, setSearch, increase } = useSearch();

  console.log("RENDER HEADER");

  return (
    <section className="wrapper">
      <header>HEADER</header>
      <input
        type="text"
        placeholder="Type something..."
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <button className="button" type="button" onClick={increase}>
        +
      </button>
    </section>
  );
};

export default Header;
