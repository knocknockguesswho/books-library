import React, { useState } from 'react';
import Modal from '../composition/topping/Modal';
import ToggleBurger from '../composition/topping/ToggleBurger';
import '../assets/styles/Profile.css';
import logo from '../assets/images/bookshelf.png'
import { Link } from 'react-router-dom';
import DefaultAva from '../assets/images/default-avatar.png';
import { connect } from 'react-redux';
import { Logout } from '../../../redux/actions/Auth';
import { withRouter } from 'react-router-dom';

const Profile = (props) => {

  //toggleBurger
  const [active, setActive] = useState(false);
  const toggleNavbar = () => {
    setActive(!active);
      if(active){
        setPopUp({...popUp, status: false})
        document.body.style.overflow = 'unset';
      }
  };

  //popUp add data
  const [popUp, setPopUp] = useState({
    role: props.Auth.data.role,
    status: false,
    action: 'Add Data'
  });
  const handlePopUp = () =>{
    if(popUp.role===1){
      if(popUp.status===false){
        document.body.style.overflow = 'hidden';
      } else if(window.onclick){
        setPopUp({...popUp, status: false})
      } else {
        document.body.style.overflow = 'unset';
      }
      setPopUp({...popUp, status: !popUp.status});
    } 
    console.log(props)
  }
  
  // avatar profile /////////////////////////////////////////////////////////
  const [avatar, setAvatar] = useState({
    username: props.Auth.data.fullname,
    buffer: ``
  })
  if(avatar.buffer===''){
    setAvatar({...avatar, buffer: DefaultAva})
  }
  ///////////////////////////////////////////////////////////////////////////
  
  
  const Logout = () =>{
    props.Logout();
    props.history.push("/login")
  }

  console.log(props.Auth)

  

  if(props.Auth.isLogin===true){
    return(
      <>
      <div className={active ? 'sidebar-container active' : 'sidebar-container inactive'}>
        <div onClick={toggleNavbar}>
          <ToggleBurger />
        </div>
        <div className={active ? 'content-link' : 'content-link content-none'}>
          <ul className='avatar'>
            <li><img src={avatar.buffer}></img></li>
            <li>{avatar.username}</li>
          </ul>
          <ul className='navigator'>
            <li>History</li>
            <li onClick={handlePopUp}>Add books</li>
            <li onClick={Logout} style={{marginTop:'25%'}}>Logout</li>
          </ul>
        </div>
        <Modal status={popUp.status} action={popUp.action} handlePopUp={handlePopUp} data={props.location}/>
      </div>
      </>
    )
  }else{
    return(
      <>
      <div className={active ? 'sidebar-container active' : 'sidebar-container inactive'}>
        <div onClick={toggleNavbar}>
          <ToggleBurger />
        </div>
        <div className={active ? 'content-link' : 'content-link content-none'}>
          <div style={{width:'80%', margin:'20% auto', fontSize:'120%', textAlign:'center'}}>
            <img src={logo}></img>
            <div style={{marginTop:'30%'}}>
              <p>Welcome to our services.<br></br>Please login for better experience.</p>
              <Link to='/login' style={{cursor:'pointer', textDecoration:'none', fontSize:'1.2em'}}>Login</Link>
            </div>
          </div>
        </div>
        {/* <Modal status={popUp.status} action={popUp.action} handlePopUp={handlePopUp}/> */}
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  Auth: state.Auth
});

const mapDispatchToProps = { Logout };

const pushRoute = withRouter(Profile)

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(pushRoute)

