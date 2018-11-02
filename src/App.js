import React, { Component } from 'react';
import './App.css';

import Dashboard from './Dashboard/Dashboard';
import Form from './Form/Form';
import Header from './Header/Header';

class App extends Component {
  
  render() {
    return (
      <div>
        < Dashboard />
        < Form />
        < Header />
      </div>
    );
  }
}

export default App;
