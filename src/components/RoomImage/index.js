import React from 'react';
import lightsOnImage from '../../assets/daytime_room.png';
import lightsOffImage from '../../assets/nighttime_room.png';
import './index.scss';

const RoomImage = ({
    lightsOn
}) => {
    const image = (lightsOn) ? lightsOnImage : lightsOffImage

    return (<img src={image} alt={'room-art'}/>)
}

export default RoomImage;