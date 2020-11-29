import React from 'react';
import '../Footer/style/footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Links</h2>
            <Link to='/'>HOME</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Offices</Link>
            <Link to='/'>Team</Link>
            <Link to='/'>Contact</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Trademark</h2>
            <Link to='/'>Overview</Link>
            <Link to='/'>Registration</Link>
            <Link to='/'>Infringment</Link>
            <Link to='/'> Watch</Link>
            <Link to='/'>Selection</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Patent</h2>
            <Link to='/'>Overview</Link>
            <Link to='/'>Registration</Link>
            <Link to='/'> Drafting</Link>
            <Link to='/'>Patentability Search</Link>
            <Link to='/'>Infringment</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Design</h2>
            <Link to='/'>Overview</Link>
            <Link to='/'>Business & Corporate</Link>          
        </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              AIPT
            </Link>
          </div>
          <small className='website-rights'>ALL RIGHT RESERVE © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
            className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
            className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
            className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;