import "./App.css";

import SearchProvider from "./context/Search/SearchProvider";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";
import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SearchProvider>
              <Header />
            </SearchProvider>
          }
        />
        <Route exact path="/list" element={<List />} />
        <Route
          exact
          path="/search"
          element={
            <SearchProvider>
              <Search />
            </SearchProvider>
          }
        />
        <Route
          exact
          path="/counter"
          element={
            <SearchProvider>
              <Counter />
            </SearchProvider>
          }
        />
      </Routes>
      <span className="help-message">
        Open the browser console to see the magic ⚡
      </span>
    </div>
  );
}

export default App;
