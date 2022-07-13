import useSearch from "../context/Search/useSearch";

const Header = () => {
  const { setSearch } = useSearch();

  console.log("RENDER HEADER");
  return (
    <section className="wrapper">
      <header>HEADER</header>
      <input type="text" placeholder="Type something..." onChange={(ev) => setSearch(ev.target.value)} />
    </section>
  );
};

export default Header;
