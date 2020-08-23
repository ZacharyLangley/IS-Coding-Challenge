import React from 'react';
import { shallow } from 'enzyme';

import RoomLayout from './index';

// Smoke Test
it('renders without crashing', () => {
  shallow(<RoomLayout musicPlayer={<div/>} roomImage={<div/>} />);
});