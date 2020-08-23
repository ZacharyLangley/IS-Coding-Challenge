import React from 'react';
import { shallow } from 'enzyme';
import MusicPlayer from './index';

// Smoke Test
it('renders without crashing', () => {
  shallow(<MusicPlayer />);
});