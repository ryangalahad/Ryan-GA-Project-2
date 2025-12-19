import React from 'react';

const InputAmount = (props) => {

  function handleTypedAmount(event) {
    props.setAmount(event.target.value);
  }

    return (
        <div className="input-group">
            <label>Amount: </label>
            <input  type = "number" value = {props.amount} 
                    onChange = {handleTypedAmount}
                    placeholder='Enter Amount:'
            />
        </div>
    );
};

export default InputAmount;