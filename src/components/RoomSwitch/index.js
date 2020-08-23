import React from 'react';
import { Switch } from 'antd';
import PropTypes from 'prop-types';

import './index.scss';

const RoomSwitch = ({
    onChange,
    defaultChecked
}) => <Switch defaultChecked={defaultChecked} onChange={onChange} />

RoomSwitch.propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultChecked: PropTypes.bool.isRequired
}

export default RoomSwitch;