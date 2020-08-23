import React from 'react'
import { connect } from 'react-redux'
import { InsertRowRightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import RoomSwitch from '../../RoomSwitch';
import { toggleLights } from '../../../domain/actions';
import './index.scss';

const lightsOnColor = '#ffffff';
const lightsOffColor = '#424242';

const Header = ({ 
    toggleLights,
    lightsOn
}) => {

    const branding = () => (
        <div className={'branding-container'}>
            <InsertRowRightOutlined />
            <span className={'branding-text'}>{'The Mahjong Room'}</span>
        </div>
    )

    const lightsToggle = () => (
        <div className={'light-switch-container'}>
            <span className={'light-switch-text'}>{`Lights ${lightsOn ? 'On' : 'Off'}`}</span>
            <RoomSwitch defaultChecked onChange={() => toggleLights()}/>
        </div>
    )

    const backgroundColor = (lightsOn) ? lightsOnColor : lightsOffColor;
    const color = (lightsOn) ? lightsOffColor : lightsOnColor;

    return (
        <div className={'header-container'} style={{ backgroundColor, color }}>
            {branding()}
            {lightsToggle()}
        </div>
    )
}

Header.propTypes = {
    toggleLights: PropTypes.func,
    lightsOn: PropTypes.bool
}

const mapStateToProps = (state) => ({
    lightsOn: state.app.lightsOn
})

const mapDispatchToProps = {
    toggleLights
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)