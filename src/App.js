import "./App.css";

import SearchProvider from "./context/Search/SearchProvider";

import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";
import Counter from "./components/Counter";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // ------------------------------  1  ---------------------------------------
    // <div className="App">
    //   <SearchProvider>
    //     <Header />
    //     <List />
    //     <Search />
    //     <Counter />
    //   </SearchProvider>
    //   <span className="help-message">
    //     Open the browser console to see the magic ⚡
    //   </span>
    // </div>

    // ------------------------------  2  ---------------------------------------
    // <div className="App">
    //   <ul>
    //     <li>
    //       <Link to="/">Header</Link>
    //     </li>
    //     <li>
    //       <Link to="/list">List</Link>
    //     </li>
    //     <li>
    //       <Link to="/search">Search</Link>
    //     </li>
    //     <li>
    //       <Link to="/counter">Counter</Link>
    //     </li>
    //   </ul>
    //   <SearchProvider>
    //     <Routes>
    //       <Route exact path="/" element={<Header />} />
    //       <Route exact path="/list" element={<List />} />
    //       <Route exact path="/search" element={<Search />} />
    //       <Route exact path="/counter" element={<Counter />} />
    //     </Routes>
    //   </SearchProvider>
    //   <span className="help-message">
    //     Open the browser console to see the magic ⚡
    //   </span>
    // </div>

    // ------------------------------  3  ---------------------------------------
    // <div className="App">
    //   <ul>
    //     <li>
    //       <Link to="/">Header</Link>
    //     </li>
    //     <li>
    //       <Link to="/list">List</Link>
    //     </li>
    //     <li>
    //       <Link to="/search">Search</Link>
    //     </li>
    //     <li>
    //       <Link to="/counter">Counter</Link>
    //     </li>
    //   </ul>
    //   <Routes>
    //     <Route
    //       exact
    //       path="/"
    //       element={
    //         <SearchProvider>
    //           <Header />
    //         </SearchProvider>
    //       }
    //     />
    //     <Route exact path="/list" element={<List />} />
    //     <Route
    //       exact
    //       path="/search"
    //       element={
    //         <SearchProvider>
    //           <Search />
    //         </SearchProvider>
    //       }
    //     />
    //     <Route
    //       exact
    //       path="/counter"
    //       element={
    //         <SearchProvider>
    //           <Counter />
    //         </SearchProvider>
    //       }
    //     />
    //   </Routes>
    //   <span className="help-message">
    //     Open the browser console to see the magic ⚡
    //   </span>
    // </div>

    // ------------------------------  4  ---------------------------------------
    <div className="App">
      <ul>
        <li>
          <Link to="/">Header</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
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
            <SearchProvider>
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
      <span className="help-message">
        Open the browser console to see the magic ⚡
      </span>
    </div>
  );
}

export default App;
