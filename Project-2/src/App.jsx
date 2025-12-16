import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CurrencyConverter from "./Components/CurrencyConverter";
import AboutApp from "./Navigation/AboutApp";
import NavBar from "./Navigation/NavBar";
import PopularRates from "./Navigation/PopularRates";
import FavouritesManager from "./Components/FavouritesManager";

const App = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  function handlePopular1() {
    setFromCurrency("GBP");
    setToCurrency("USD");
  }

  function handlePopular2() {
    setFromCurrency("EUR");
    setToCurrency("USD");
  }

  function handlePopular3() {
    setFromCurrency("USD");
    setToCurrency("JPY");
  }

  function handlePopular4() {
    setFromCurrency("EUR");
    setToCurrency("GBP");
  }

  return (
    <div className="App">
      <NavBar />
      <div className="main-content-area">
        <Routes>
          <Route
            path="/"
            element={
              <>
              <CurrencyConverter
                fromCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
              />
              <FavouritesManager
                  currentFrom={fromCurrency}
                  currentTo={toCurrency}
                />
              </>
            }
          />
          <Route
            path="/popular"
            element={
              <PopularRates onSave={handlePopular1} onSave2={handlePopular2} onSave3={handlePopular3} onSave4={handlePopular4} />
            }
          />
          <Route path="/about" element={<AboutApp />} />
        </Routes>

      </div>
    </div>
  );
};

export default App;
