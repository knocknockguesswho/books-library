import React, { useState, Component } from 'react';
import Book from '../topping/Book'
// import { Link } from 'react-router-dom'


const Card = (props) => {

  //useState
  
  const [detail, setDetail] = useState({
    status: false,
    data: props.data,
    username: props.username,
    role: props.role,
    image: ''
  });
  const getBookDetail = ()=>{
    if(detail.status===false){
      document.body.style.overflow = 'hidden';
    } else{
      document.body.style.overflow = 'unset';
    }
    setDetail({...detail, status: !detail.status})
    console.log(props)
  }




  //useEffect

  //style
  const card_box = {
    boxSizing: 'border-box',
    width: '22rem',
    height: '350px',
    margin: '5% auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .2)',
    borderRadius: '.8em',
    overflow: 'hidden',
    cursor: 'pointer',
    color: '#424242'
  }
  
  const book_image = {
    flex:'1.3',
    boxSizing: 'border-box',
    overflow: 'hidden'
  }
  
  const book_caption = {
    padding: '0 2%',
    flex:'.7'
  }
  
  const book_image__object = {
    maxWidth: '100%'
  }

  const detail_active = {
    visibility:'visible',
    position:'fixed', 
    width:'100vw', 
    height:'992px', 
    top:'0', 
    left:'0', 
    zIndex:'999'
  }

  const detail_inactive = {
    visibility: 'hidden',
    display: 'none'
  }


  return (
    
    <>
    <div className='card-box' style={card_box} onClick={getBookDetail}>
      <div className='book-image' style={book_image}>
        <img src={`http://localhost:3000/uploads/${props.data.image}`} style={book_image__object}/>
      </div>
      <div className='book-caption' style={book_caption}>
        <p style={{textAlign:'center', marginTop:'2%', fontSize:'1.5em', fontWeight:'600'}}>{props.data.title}</p>
        <div className='caption' style={{marginTop:'-5%', overflow:'hidden', whiteSpace:'pre', textOverflow:'ellipsis'}}>{props.data.description}</div>
      </div>
    </div>
    <div style={detail.status? detail_active : detail_inactive}>
      <Book getBookDetail={getBookDetail} data={detail.data} role={detail.role} name={detail.username} {...props}/>
    </div>
    </>
  )
}

export default Card;