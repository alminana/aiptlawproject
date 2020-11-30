import React from 'react';
import banner from '../image/client/banner.jpg';
import '../Banner/style/Banner.css';
function index() {
    return (
    <div className=" jumbotron-banner jumbotron-fluid">
    <img src={banner} alt="banner"/>
      </div>
    )
}

export default index
