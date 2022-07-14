import useSearch from "../context/Search/useSearch";

const Counter = () => {
  const { counter } = useSearch();

  console.log("RENDER COUNTER");
  return <span className="wrapper">Counter value: {counter}</span>;
};

export default Counter;
