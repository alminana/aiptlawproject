import React from 'react';
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/index';
import './App.css';
import Footer from './components/Footer/index';
const App = () =>  {
  return (
    <BrowserRouter>
      <Router>
      <Navbar/>
        <Switch>
         components
         
        </Switch>
        <Footer/>
      </Router>
    </BrowserRouter>
  );
}

export default App;
