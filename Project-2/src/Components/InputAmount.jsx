import React from 'react';

const InputAmount = (props) => {
    return (
        <div className="input-group">
            <label>Amount: </label>
            <input  type = "number" value = {props.passAmount} 
                    onChange = {props.passTypeFunction}
                    placeholder='Enter Amount:'
            />

        </div>
    );
};

export default InputAmount;