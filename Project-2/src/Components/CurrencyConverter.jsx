import { useEffect, useState } from "react";
import ToCurrencies from "./ToCurrencies";
import FromCurrencies from "./FromCurrencies";
import LoadingError from "./LoadingError";
import InputAmount from "./InputAmount";

const CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "HKD",
  "NZD",
  "SEK",
  "KRW",
  "SGD",
  "NOK",
  "MYR",
];

const CurrencyConverter = (props) => {
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRates = async () => {
    setIsLoading(true); // 1. Start loading
    setError(null); // 2. Clear any old errors

    try {
      const API_KEY = "d0640925910755a76fe5be4c";
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${props.fromCurrency}`
      );

      if (!res.ok) {
        throw new Error("Something went wrong with the API request");
      }

      const data = await res.json();
      sessionStorage.setItem(
        "currentRates",
        JSON.stringify(data.conversion_rates)
      );

      setExchangeRate(data.conversion_rates[props.toCurrency]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false); // Stops loading no matter what.
    }
  };
  useEffect(() => {
    fetchRates();
  }, [props.fromCurrency]); // Dependency array: runs fetch only when 'fromCurrency' changes

  // Below too find out the pupose of JSON.parse etc
  useEffect(() => {
    const storedRates = JSON.parse(sessionStorage.getItem("currentRates"));
    if (storedRates) {
      setExchangeRate(storedRates[props.toCurrency]);
    }
  }, [props.toCurrency]);

  // Below will only be invoked when you have and  exchange Rate. Defualt is null
  const convertedAmount = exchangeRate
    ? (amount * exchangeRate).toFixed(2)
    : "---";

  // Function to track user typed amount
  function handleTypedAmount(event) {
    setAmount(event.target.value);
  }

  //Function to track user selected currency
  function fromCurrencyChange(event) {
    props.setFromCurrency(event.target.value);
  }

  function toCurrencyChange(event) {
    props.setToCurrency(event.target.value);
  }


  return (
    <div className="converter-container">
      <h2>Currency Converter 💱</h2>

      <FromCurrencies
        setFromCurrency={props.fromCurrency}
        passFromCurrency={fromCurrencyChange}
        allCurrencies={CURRENCIES}
      />

      <InputAmount passAmount={amount} passTypeFunction={handleTypedAmount} />

      <ToCurrencies
        setToCurrency={props.toCurrency}
        passToCurrency={toCurrencyChange}
        allCurrencies={CURRENCIES}
      />

      <LoadingError passLoading={isLoading} passError={error} />
      {/* FINAL RESULT DISPLAY */}

      {!isLoading &&
        !error && ( // not loading and no error display this
          <div className="result-display">
            <h3>
              {amount} {props.fromCurrency} =
              <span className="highlight">
                {convertedAmount} {props.toCurrency}{" "}
              </span>
            </h3>
            <p className="rate-info">
              Exchange Rate: {props.fromCurrency} = {exchangeRate} {props.toCurrency}
            </p>
          </div>
        )}
    </div>
  );
};

export default CurrencyConverter;
