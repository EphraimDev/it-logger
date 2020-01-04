import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize materialize JS
    M.AutoInit();
  });

  return <div className='App'>My APP</div>;
};

export default App;
