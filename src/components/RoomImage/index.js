import React from 'react';
import lightsOnImageBig from '../../assets/daytime_room_768.png';
import lightsOnImageSmall from '../../assets/daytime_room_200.png';
import lightsOffImageBig from '../../assets/nighttime_room_768.png';
import lightsOffImageSmall from '../../assets/nighttime_room_200.png';
import './index.scss';

const RoomImage = ({
    lightsOn
}) => {
    const lightImageSet = `${lightsOnImageSmall} 400w, ${lightsOnImageBig} 768w, ${lightsOnImageBig} 1400w`;
    const darkImageSet = `${lightsOffImageSmall} 400w, ${lightsOffImageBig} 768w,  ${lightsOffImageBig} 1400w`;
    const image = (lightsOn) ? lightsOnImageBig : lightsOffImageBig
    const imageSet = (lightsOn) ? lightImageSet : darkImageSet

    return (
        <img 
            src={image} 
            srcset={imageSet} 
            alt={'room-art'} 
            style={{
                maxHeight: 400,
                maxWidth: 768
            }}
        />
    )
}

export default RoomImage;