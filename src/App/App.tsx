import React from 'react';
import Permits from './components/Permits';

import { NavFoot, NavTop } from './components/Nav';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <NavTop />
      <div className='permit_head'> Permits </div>
      <Permits />
      <NavFoot />
    </div>
  );
}

export default App;
