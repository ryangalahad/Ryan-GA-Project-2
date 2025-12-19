import React from 'react';

const FromCurrencies = (props) => {


    function fromChange(event) {
        props.setFromCurrency(event.target.value);
  }

    return (
        <div className="input-group">
        <label>From:</label>
        <input 
                type="text"
                value={props.fromCurrency} 
                onChange={fromChange} 
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

export default FromCurrencies;