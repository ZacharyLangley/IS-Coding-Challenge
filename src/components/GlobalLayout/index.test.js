import React from 'react';
import { shallow } from 'enzyme';
import GlobalLayout from './index';

// Smoke Test
it('renders without crashing', () => {
  shallow(<GlobalLayout body={<div/>} />);
});

it('renders body as prop of GlobalLayout', () => {
    const testBody = <div>{'This is a Test Component'}</div>
    const wrapper = shallow(<GlobalLayout body={testBody} />);
    expect(wrapper.contains(testBody)).toEqual(true);
});