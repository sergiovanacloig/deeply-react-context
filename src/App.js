import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";
import Counter from "./components/Counter";

import SearchProvider from "./context/Search/SearchProvider";

import "./App.css";

function App() {
  return (
    <div className="App initialApp">
      <SearchProvider>
        <Header />
        <List />
        <Search />
        <Counter />
      </SearchProvider>
      <span className="help-message">
        Open browser console to see the magic ⚡
      </span>
    </div>
  );
}

export default App;
