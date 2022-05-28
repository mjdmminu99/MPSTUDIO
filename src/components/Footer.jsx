import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col2'>
            <h3>Mint Panda STUDIO</h3>
            <h3>+9999948399</h3>
            <h3>mintpanda@gmail.com</h3>
          </div>
          <div className='col3'>
            <h4>SOCIAL MEDIA</h4>
            <div class Name='sm-links'>
              <Link to='/'>
                {' '}
                <h5>Instagram</h5>
              </Link>
              <Link to='/'>
                <h5>YouTube</h5>
              </Link>
              <Link to='/'>
                <h5>Twitter</h5>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-sm'>
            &copy;{new Date().getFullYear()} MP STUDIO | All right reserved |
            Terms of Services | Privacy
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
