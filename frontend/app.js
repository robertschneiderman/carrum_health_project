import React from 'react';
import Header from './header';
import Dashboard from './header';

const App = (props) => (
  <div className="app">
    <Header />
    <Dashboard />
    {props.children}
  </div>
);

export default App;