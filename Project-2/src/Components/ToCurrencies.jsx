import React from 'react';

const ToCurrencies = (props) => {

    function toChange(event) {
        props.setToCurrency(event.target.value);
    }

    return (
        <div className="input-group">
        <label>To:</label>
        <input 
                type="text"
                value={props.toCurrency} 
                onChange={toChange} 
                list="currency-options-from" 
                placeholder="Type or select a currency"
        />
        <datalist id="currency-options-from">
                {props.allCurrencies.map((currency) => (
                    <option key={currency} value={currency} />
                ))}
        </datalist>
      </div>
    );
};

export default ToCurrencies;