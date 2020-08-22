import React from 'react';
import './App.scss';
import Routes from './Routes';

import { GlobalLayout } from '../components';

function App() {
  return (
    <GlobalLayout body={<Routes/>}/>
  );
}

export default App;
