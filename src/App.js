import React from 'react';
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/index';
import './App.css';

const App = () =>  {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Navbar/>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
