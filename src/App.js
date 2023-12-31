import React from "react";

import Header from "./Components/Header";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { Card } from "./pages/Card";
// import pizzas from "./assets/pizzas.json";
import "./scss/app.scss";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");


  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card" element={<Card />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
