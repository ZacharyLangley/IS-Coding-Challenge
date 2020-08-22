import React from 'react';
import { Switch } from 'antd';
import './index.scss';

const RoomSwitch = ({ onChange, defaultChecked }) => <Switch defaultChecked={defaultChecked} onChange={onChange} />

export default RoomSwitch;