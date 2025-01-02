import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import HomePage from './component/homePage';

config.autoAddCss = false;

function App() {
  return <HomePage />;
}

export default App;

