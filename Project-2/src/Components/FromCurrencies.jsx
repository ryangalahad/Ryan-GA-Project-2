import React from 'react';

const FromCurrencies = (props) => {
    return (
        <div className="input-group">
        <label>From:</label>
        <select value={props.setFromCurrency} onChange={props.passFromCurrency}>
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