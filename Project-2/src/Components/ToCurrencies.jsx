import React from 'react';

const ToCurrencies = (props) => {
    return (
        <div className="input-group">
        <label>To:</label>
        <select value={props.setToCurrency} onChange={props.passToCurrency}>
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