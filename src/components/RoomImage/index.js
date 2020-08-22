import React from 'react';
import lightsOnImageBig from '../../assets/daytime_room_768.png';
import lightsOnImageSmall from '../../assets/daytime_room_200.png';
import lightsOffImageBig from '../../assets/nighttime_room_768.png';
import lightsOffImageSmall from '../../assets/nighttime_room_200.png';
import './index.scss';

const RoomImage = ({
    lightsOn
}) => {
    const lightImageSet = `${lightsOnImageSmall} 400w, ${lightsOnImageBig} 768w`;
    const darkImageSet = `${lightsOffImageSmall} 400w, ${lightsOffImageBig} 768w`;
    const image = (lightsOn) ? lightsOnImageSmall : lightsOffImageSmall
    const imageSet = (lightsOn) ? lightImageSet : darkImageSet

    return (
        <img src={image} srcset={imageSet} alt={'room-art'}/>
    )
}

export default RoomImage;