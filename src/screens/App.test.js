import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Smoke Test
it('renders without crashing', () => {
  shallow(<App />);
});