import React from 'react';
import './App.scss';
import Routes from './Routes';

import { GlobalLayout } from '../components';

const App = () => {
  return (
    <GlobalLayout body={<Routes/>}/>
  );
}

App.propTypes = {}

export default App;
