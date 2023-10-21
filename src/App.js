import React from "react";

import Header from "./Components/Header";
import "./scss/app.scss";
import pizzas from "./assets/pizzas.json";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { Card } from "./pages/Card";

console.log(pizzas);

function App() {
  const [searchValue, setSearchValue] = React.useState("")



  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              }
            />
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
