import React from 'react';

const LoadingError = (props) => {
    return (
        <div>
            {props.passLoading && <p className="loading">Fetching latest rates...</p>}
            {props.passError && <p className = "error">Error: {props.passError}</p>} 
        </div>
    );
};

export default LoadingError;