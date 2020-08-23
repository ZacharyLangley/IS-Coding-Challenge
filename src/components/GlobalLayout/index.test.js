import React from 'react';
import { shallow } from 'enzyme';
import GlobalLayout from './index';

// Smoke Test
it('renders without crashing', () => {
  shallow(<GlobalLayout body={<div/>} />);
});