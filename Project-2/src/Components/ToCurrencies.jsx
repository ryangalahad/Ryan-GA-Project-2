import React from 'react';

const ToCurrencies = (props) => {

    function toChange(event) {
        props.setToCurrency(event.target.value);
    }

    return (
        <div className="input-group">
        <label>To:</label>
        <select value={props.toCurrency} onChange={toChange}>
            {props.allCurrencies.map((currency) => (
                <option key = {currency} value = {currency}>
                    {currency}
                </option>
            ))}
        </select>
      </div>
    );
};

export default ToCurrencies;