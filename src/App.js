import React from 'react';
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Banner from './components/Banner/';
import Home from '../src/Pages/Home/index';
import Service from '../src/Pages/Service/index';
const App = (component) =>  {
  return (
    <BrowserRouter>
      <Router>
      <Navbar/>
      <Banner/>
        <Switch>
         <Route path='/' component={Home}/>
         <Route path='/service' component={Service}/>
        </Switch>
        <Footer/>
      </Router>
    </BrowserRouter>
  );
}

export default App;
