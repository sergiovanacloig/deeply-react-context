import "./App.css";

import SearchProvider from "./context/Search/SearchProvider";

import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <List />
        <Search />
      </SearchProvider>
      <span className="help-message">Open the browser console to see the magic ⚡</span>
    </div>
  );
}

export default App;
