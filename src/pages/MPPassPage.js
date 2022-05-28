
import './MPPass.css';
import ReactDOM from "react-dom";
import React, { useState } from "react";
import SideBar from '../components/Sidebar';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM});


function MPPassPage() {
   const [price, setPrice] = useState(0);
  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: {price},
          },
        },
      ],
    });
  }

  const onApprove = (data, actions) => { 
    console.log(data)
    return actions.order.capture();
  }

  return (
    <div className='mppass'>
      <SideBar />
    <div className='mp-pass'>
        <div className="wrapper">
        <div className="Head_mp">Buy MP Pass</div>
        <hr />
        <div className='mp-mp'>
        <h5>1 MP PASS = $80  |  2 MP PASS = $150</h5>
        </div>
          <input type="number" onChange={e => setPrice(e.target.value)} value={price} className="add_p" />
          <br />
          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)} />
        </div>
      </div>
      </div>
  )
}

export default MPPassPage;