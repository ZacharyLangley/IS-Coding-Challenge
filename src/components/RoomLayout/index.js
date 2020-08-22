import React from 'react';
import './index.scss';

const RoomLayout = ({ musicPlayer, roomImage }) => (
    <div className={'room-layout'}>
        <div className={'room'}>{roomImage}</div>
        <div className={'music-player'}>{musicPlayer}</div>
    </div>
)

export default RoomLayout;