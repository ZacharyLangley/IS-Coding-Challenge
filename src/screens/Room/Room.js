import React, { useState } from 'react';
import './Room.scss';

const Room = () => {
    const [lightsOn, setLightsOn] = useState(true);

    return (
        <div>
            { (lightsOn) ? ( <div> Lights On</div> ) : ( <div> Lights Off</div> ) }
        </div>
    )
}

export default Room;