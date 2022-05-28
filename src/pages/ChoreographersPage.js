import React from 'react';
import './ChoreographersPage.css';
import SideBar from '../components/Sidebar';

function ChoreographersPage() {
  return (
    <div className='Choreographers'>
      <SideBar />
      <div className='caption'>
        <h1 className='caption_cho'>CHOREOGRAPHERS' PROFILE</h1>
        <p className='caption_p'>
          "If you dance with your heart, your body will follow."
        </p>
      </div>
      <br /> <br />
      <div className='container_'>
        <div className='row_'>
          <div className='col_1'></div>
          <div className='momo_meta'>
            <hr />
            <img src='/images/momo1.jpg' alt='' className='momo_img' />
            <p className='caption_momo1'>MOMO</p>
            <p className='momo_text'>
              Momo Hirai, known mononymously as Momo, is a Japanese singer,
              rapper and dancer based in South Korea. She is a member of the
              South Korean girl group Twice, formed by JYP Entertainment. Momo
              is one of Twice's three Japanese members.She is one of the most
              popular non-Korean K-pop stars, and her popularity has been
              credited with improving relations between South Korea and Japan by
              the Chosun Ilbo.Known for her physical fitness and body movements,
              she is nicknamed "Dance Machine".In this regard, Momo is
              considered Twice's best dancer.
              <br />
              <p className='momo_quote'>
                "We feel pressure from every angle to meet expectations, but the
                pressure also pushes us in a positive was as well."
              </p>
            </p>
          </div>
          <br />
          <div className='know_m'>
            <button type='button' className='more-m'>
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoreographersPage;
