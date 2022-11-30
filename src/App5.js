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
            <SearchProvider key="list">
              <Header />
            </SearchProvider>
          }
        />
        <Route
          exact
          path="/list"
          element={
            <SearchProvider key="list">
              <List />
            </SearchProvider>
          }
        />
        <Route
          exact
          path="/search"
          element={
            <SearchProvider key="list">
              <Search />
            </SearchProvider>
          }
        />
        <Route
          exact
          path="/counter"
          element={
            <SearchProvider key="counter">
              <Counter />
            </SearchProvider>
          }
        />
      </Routes>
      <footer>
        <span>Open the browser console to see the magic ⚡</span>
      </footer>
    </div>
  );
}

export default App;
