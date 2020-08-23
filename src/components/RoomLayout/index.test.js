import React from 'react';
import { shallow } from 'enzyme';

import RoomLayout from './index';
import RoomImage from '../RoomImage';

// Smoke Test
it('renders without crashing', () => {
  shallow(<RoomLayout musicPlayer={<div/>} roomImage={<div/>} />);
});

it('renders body as prop of GlobalLayout', () => {
    const testMusicPlayer = <div>{'This is a Test Component'}</div>
    const testRoomImage = <RoomImage lightsOn={true}/>
    const wrapper = shallow(<RoomLayout musicPlayer={testMusicPlayer} roomImage={testRoomImage} />);
    
    expect(wrapper.contains(testMusicPlayer)).toEqual(true);
    expect(wrapper.contains(testRoomImage)).toEqual(true);
});