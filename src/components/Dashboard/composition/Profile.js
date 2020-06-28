import React, { useState } from 'react';
import Modal from '../composition/topping/Modal';
import ToggleBurger from '../composition/topping/ToggleBurger'
import '../assets/styles/Profile.css';

function Profile() {
  const [active, setActive] = useState(false);
  const toggleNavbar = () => {
    if(active){
      setPopUp(false)
    }
    setActive(!active);
  };
  const [popUp, setPopUp] = useState(false);
  const handlePopUp = () =>{
    setPopUp(!popUp);
  }
  return(
    <>
    <div className={active ? 'sidebar-container active' : 'sidebar-container inactive'}>

      <div onClick={toggleNavbar}>
        <ToggleBurger />
      </div>
      <div className={active ? 'content-link' : 'content-link content-none'}>
        <ul className='avatar'>
          <li></li>
          <li>Niki Zevanya</li>
        </ul>
        <ul className='navigator'>
          <li>Explore</li>
          <li>History</li>
          <div><Modal popUp={popUp} handlePopUp={handlePopUp}/>
          </div>
        </ul>
      </div>

    </div>
    </>
  )
}

export default Profile;

