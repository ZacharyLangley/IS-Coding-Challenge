import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const RoomLayout = ({
    musicPlayer,
    roomImage
}) => (
    <div className={'room-layout'}>
        <div className={'room'}>{roomImage}</div>
        <div className={'music-player'}>{musicPlayer}</div>
    </div>
)

RoomLayout.propTypes = {
    musicPlayer: PropTypes.element,
    roomImage: PropTypes.element.isRequired
}

export default RoomLayout;