import React, { useState } from 'react';
import { connect } from 'react-redux';
import './index.scss';

import RoomImage from '../../components/RoomImage';
import RoomLayout from '../../components/RoomLayout';
import RoomSwitch from '../../components/RoomSwitch';
import { toggleLights } from '../../domain/actions';

const lightsOnColor = '#e1f5f8';
const lightsOffColor = '#897572';

const Room = ({ toggleLights, lightsOn }) => {
    const backgroundColor = (lightsOn) ? lightsOnColor : lightsOffColor;
    return (
        <div className={'room-container'} style={{ backgroundColor }}>
            <RoomLayout sidebar={<RoomSwitch defaultChecked onChange={() => toggleLights()}/>} roomImage={<RoomImage lightsOn={lightsOn}/>}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    lightsOn: state.app.lightsOn
})

const mapDispatchToProps = {
    toggleLights
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)