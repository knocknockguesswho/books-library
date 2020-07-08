import React, { useState, Component, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import '../assets/styles/Carousel.css';
import { Button } from 'reactstrap';

import { connect } from 'react-redux';
import { getBooks } from '../../../redux/actions/GetBooks'
import { Logout } from '../../../redux/actions/Auth'



const Carousel = (props) => {

  const [data, setData] = useState({
    totalItem: 3,
      currentSlide: 0,
      prevSlide: 2,
      nextSlide: 1,
      books: props.data,
      // display:[
      //       {
      //         image: props.data[0].image,
      //         title: props.data[0].title,
      //         author: props.data[0].author
      //       },
      //       {
      //         image: props.data[1].image,
      //         title: props.data[1].title,
      //         author: props.data[1].author
      //       },
      //       {
      //         image: props.data[2].image,
      //         title: props.data[2].title,
      //         author: props.data[2].author
      //       }
      // ]  
  })
  const [isLoading, setIsLoading] = useState(true)
  

  const prev = ()=>{
    setData({
      currentSlide: data.nextSlide,
      prevSlide: data.currentSlide,
      nextSlide: data.prevSlide,
    });
  }
  
  const next = ()=>{
    setData({
      currentSlide: data.prevSlide,
      prevSlide: data.nextSlide,
      nextSlide: data.currentSlide,
    });
  }

  useEffect(() => {
    setIsLoading(props.Books.isLoading);
  }, [props])
  return(
    <div>
    {isLoading ? 'Loading...' : <div className='carousel-container' style={{height:'400px'}}>
      <div className='prev-carousel'>
        <div className='prev-image'>
          <img src={`http://localhost:3000/uploads/${props.data[data.prevSlide].image}`} />
        </div>
        <div className='prev-image-title'>
          <p className='books-title' style={{fontSize:'1.5rem', fontWeight:'600'}}>{props.data[data.prevSlide].title}</p>
          <p className='books-author' style={{marginTop:'-2%'}}>{props.data[data.prevSlide].author}</p>
        </div>
      </div>

      <div className='main-carousel'>
        <div className='arrow'>
          <i className="fa fa-chevron-left" onClick={prev}></i>
          <i className="fa fa-chevron-right" onClick={next}></i>         
        </div>
        <div className='main-image'>
          <img src={props.data[data.nextSlide].image} style={{right:'-100%', position:'absolute'}} className='next-slide'></img>
          <img src={props.data[data.prevSlide].image} style={{left:'-100%', position:'absolute'}} className='prev-slide'></img>
          <img src={`http://localhost:3000/uploads/${props.data[data.currentSlide].image}`} className='current-slide' />
        </div>
        <div className='image-title'>
          <p className='books-title' style={{fontSize:'2rem', fontWeight:'600'}}>{props.data[data.currentSlide].title}</p>
          <p className='books-author'>{props.data[data.currentSlide].author}</p>
        </div>
      </div>

      <div className='next-carousel'>
      <div className='next-image'>
        <img src={`http://localhost:3000/uploads/${props.data[data.nextSlide].image}`} />
      </div>
      <div className='next-image-title'>
          <p className='books-title' style={{fontSize:'1.5rem', fontWeight:'600'}}>{props.data[data.nextSlide].title}</p>
          <p className='books-author' style={{marginTop:'-2%'}}>{props.data[data.nextSlide].author}</p>
        </div>
      </div>
      </div>}
    </div>
    
  )
}
export default Carousel;

