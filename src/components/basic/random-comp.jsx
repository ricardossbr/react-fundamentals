import React from 'react';

export default (props) => {
    const {max, min } = props;
    const result = parseInt(Math.random() * (max - min)) + min;
    return(
        <div>
            <h2>Random value</h2>

            <p>
                <strong>min value:</strong> {min}
            </p>

            <p>
                <strong>max value:</strong> {max}
            </p>

            <p>
                <strong>result value:</strong> {result}
            </p>
        </div>
    );

}