import React from 'react';
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Banner from './components/Banner/';
import Home from '../src/Pages/Home/index';
const App = () =>  {
  return (
    <BrowserRouter>
      <Router>
      <Navbar/>
      <Banner/>
        <Switch>
         <Home/>
         
        </Switch>
        <Footer/>
      </Router>
    </BrowserRouter>
  );
}

export default App;
