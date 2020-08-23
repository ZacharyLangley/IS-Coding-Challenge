import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import Room from './index';
import configureStore, { history } from '../../configureStore'

const store = configureStore()
// Smoke Test
it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
        <Room />
    </Provider>
  );
});