import React, { useState } from 'react'


const FailPopUp = (props) =>{


  // const [inactive, setInactive] = useState({
  //   status: props.status
  // });



  const popUp_inActive = {
    visibility: 'hidden',
    opacity: '0',
    transition: 'all .1s opacity .1s linear',
    cursor: 'default',
    zIndex: '99',
    position: 'absolute',
    width: '800px',
    height:'500px',
    top: '20%',
    left: '450px',
    
  }
  
  const popUp_active = {
    visibility: 'visible',
    opacity: '1',
    transition: 'all .1s opacity .1s linear',
    cursor: 'default',
    zIndex: '99',
    position: 'absolute',
    width: '800px',
    height:'500px',
    top: '20%',
    left: '450px',
    userSelect: 'none'
  }
  
  const modal_container = {
    width: '100%',
    height: '100%',
    backgroundColor:'white',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .3)',
    borderRadius:'.8em',
    textAlign: 'center',
    padding: '2% 3%'
  }

  const close_button = {
    color: 'red',
    fontSize:'2em',
    width:'max-content',
    height:'1em',
    float: 'right'
  }



    // switch (props.message) {
    //   case 'delete':
    //     <p>Data <b>{props.title}</b> berhasil dihapus!</p>
    //   case 'register':
    //     <p>Thank you for signing up.</p>
    //   default:
    //     break;
    // }
    // }

  return(
      
    <>
      <div style={props.status ? popUp_active : popUp_inActive}>
        <div style={modal_container}>
          <div style={close_button}>
          <p style={{cursor: 'pointer', height:'1em'}} onClick={props.handlePopUp}>&#10006;</p>
          </div>
          <div style={{marginTop:'10%'}}>
            <p style={{fontSize: '10rem',color: '#000'}}>&#10006;</p>
            <p style={{fontSize:'2em'}}>{props.message}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FailPopUp;