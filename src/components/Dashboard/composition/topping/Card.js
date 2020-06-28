import React, { useState } from 'react'


const Card = (props) => {

  //useState

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
    overflow: 'hidden'
  }
  
  const book_image = {
    backgroundColor:'#000', 
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


  return (
    

      <div className='card-box' style={card_box}>

        <div className='book-image' style={book_image}>
          <img src={props.data.image} style={book_image__object}></img>
        </div>

        <div className='book-caption' style={book_caption}>
          <p style={{textAlign:'center', marginTop:'2%', fontSize:'1.2em', fontWeight:'600'}}>{props.data.title}</p>
          <div className='caption' style={{marginTop:'-5%'}}>{props.data.description}</div>
        </div>



    </div>
  )
}

export default Card;