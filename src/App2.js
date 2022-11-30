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
      </SearchProvider>
      <SearchProvider>
        <Counter />
      </SearchProvider>
      <footer>
        <span>Open the browser console to see the magic ⚡</span>
      </footer>
    </div>
  );
}

export default App;
