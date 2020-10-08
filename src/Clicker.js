import React from 'react';

const clicker = (props) => {

    return (
        <div>
            <p>clicker works</p>
            <button onClick = {props.click}>activatePassedMethod</button>
        </div>
    )

}

export default clicker;