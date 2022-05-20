import React from 'react';
import './Pages.css';
import SideBar from '../components/Sidebar';
import './AboutUs.css';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <div className='app'>
      <SideBar />

      <div className='about component_space'>
        <div className='container'>
          <div className='row'>
            <div className='col__2'>
              <img src='/images/er.jpg' alt='' className='about__img' />
            </div>
            <div className='col__2'>
              <h1 className='about__heading'>MPSTUDIO</h1>
              <br /> <br />
              <div className='about__meta'>
                <p className='about__text'>
                  MPSTUDIO welcomes choreographers and students of all ages,
                  backgrounds, and experience levels. MPSTUDIO offers well
                  equipped studios and a welcoming staff. MPSTUDIO invites you
                  to explore your creative side and interact with a community of
                  choreographers and students who never cease to amaze.
                  <br />
                  <br />
                  <p className='quote'>
                  "You showed us great facial expressions, they matched with the
                  music."
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
