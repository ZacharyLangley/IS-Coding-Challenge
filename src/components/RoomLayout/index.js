import React from 'react';
import './index.scss';

const RoomLayout = ({ sidebar, roomImage}) => (
    <div className={'room-layout'}>
        <div className={'sidebar'}>{sidebar}</div>
        <div className={'room'}>{roomImage}</div>
    </div>
)

export default RoomLayout;