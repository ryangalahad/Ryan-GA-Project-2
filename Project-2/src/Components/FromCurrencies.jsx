import React from 'react';
// Both the FromCurrencies and ToCurrencies can both be done entirely on
// Currency converter instead splitting it up.
const FromCurrencies = (props) => {

    //Function to track user selected currency
    function fromChange(event) {
        props.setFromCurrency(event.target.value);
  }

    return (
        <div className="input-group">
        <label>From:</label>
        <select value={props.fromCurrency} onChange={fromChange}>
            {props.allCurrencies.map((currency) => (
                <option key = {currency} value = {currency}>
                    {currency}
                </option>
            ))}
        </select>
      </div>
    );
};

export default FromCurrencies;