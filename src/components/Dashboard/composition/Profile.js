import React, { useState } from 'react';
import Modal from '../composition/topping/Modal';
import ToggleBurger from '../composition/topping/ToggleBurger'
import '../assets/styles/Profile.css';

function Profile() {
  const [active, setActive] = useState(false);
  const toggleNavbar = () => {
    setActive(!active);
      if(active){
        setPopUp({...popUp, status: false})
        document.body.style.overflow = 'unset';
      }
  };
  const [popUp, setPopUp] = useState({
    status:false,
    action: 'Add Data'
  });
  const handlePopUp = () =>{
    if(popUp.status===false){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    setPopUp({...popUp, status: !popUp.status});
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
          <li onClick={handlePopUp}>Add books</li>
        </ul>
      </div>
      <Modal status={popUp.status} action={popUp.action} handlePopUp={handlePopUp}/>
    </div>
    </>
  )
}

export default Profile;

