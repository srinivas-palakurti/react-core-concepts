import React, { useState } from 'react';

const ToggleButtonOnOff = () => {
    const [isOff, setToggleButton] = useState(true);
    console.log("ToggleButtonOnOff funtional component Render");
    return (
        <span> <br/> <br />
        <h3>ToggleButton: </h3>
        <button onClick={() => setToggleButton(!isOff)}>{isOff ? 'On' : 'Off'}</button>
        </span>
    );
}

export default ToggleButtonOnOff;
