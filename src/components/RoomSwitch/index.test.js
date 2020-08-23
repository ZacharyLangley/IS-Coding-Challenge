import React from 'react';
import { shallow } from 'enzyme';

import RoomSwitch from './index';

// Smoke Test
it('renders without crashing', () => {
  shallow(<RoomSwitch />);
});