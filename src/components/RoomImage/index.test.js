import React from 'react';
import { shallow } from 'enzyme';

import RoomImage from './index';

// Smoke Test
it('renders without crashing', () => {
  shallow(<RoomImage lightsOn={true} />);
});