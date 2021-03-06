import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RoomImage from '../../components/RoomImage';
import RoomLayout from '../../components/RoomLayout';
import { toggleLights } from '../../domain/actions';
import MusicPlayer from '../../components/MusicPlayer';
import './index.scss';

const lightsOnColor = '#e1f5f8';
const lightsOffColor = '#897572';

const Room = ({
    toggleLights,
    lightsOn
}) => {
    const backgroundColor = (lightsOn) ? lightsOnColor : lightsOffColor;
    return (
        <div className={'room-container'} style={{ backgroundColor }}>
            <RoomLayout roomImage={<RoomImage lightsOn={lightsOn}/>} musicPlayer={<MusicPlayer />}/>
        </div>
    )
}

Room.propTypes = {
    toggleLights: PropTypes.func,
    lightsOn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    lightsOn: state.app.lightsOn
})

const mapDispatchToProps = {
    toggleLights
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)