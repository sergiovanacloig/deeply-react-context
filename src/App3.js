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
      <SearchProvider>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/list" element={<List />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/counter" element={<Counter />} />
        </Routes>
      </SearchProvider>
      <footer>
        <span>Open the browser console to see the magic ⚡</span>
      </footer>
    </div>
  );
}

export default App;
