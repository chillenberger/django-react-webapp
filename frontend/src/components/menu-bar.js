import React from 'react'



export default function Menubar() {


  return (
    <div className="mainContainer">
    </div>
  )
}

const changeDash=(action, dash)=>{
  action({
    display: dash
  })
  console.log(action)
}

function SideNavBar(props) {
  return (
    <div className='navBar'>
      <div>
        <img
          src='https://www.aevumspace.com/static/aevum_logo_white.png'
          className='logoSmall'/>
      </div>
        <div id='firstButton' className='dashButton'>
          <button onClick={() => changeDash(props.action, 'account')}>
            <p>Account</p>
          </button>
        </div>
      <div className='dashButton'>
        <button onClick={() => changeDash(props.action, 'shipment')}>
          <p>Shipments</p>
        </button>
      </div>

      <div className='dashButton'>
        <button onClick={() => changeDash(props.action, 'billing')}>
          <p>Billing</p>
        </button>
      </div>
      <div id='lastButton' className='dashButton'>
        <button onClick={() => changeDash(props.action, 'settings')}>
          <p>Settings</p>
        </button>
      </div>
    </div>
  )
}

export {SideNavBar}
