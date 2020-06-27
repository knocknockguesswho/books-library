import React, { Component } from 'react';
import '../assets/styles/Carousel.css';
import DummyImage from '../assets/images/BumiManusia.jpg';
import DummyImage2 from '../assets/images/dilan.jpg';
import DummyImage3 from '../assets/images/kambing_jantan.jpg'


class Carousel extends Component{
  constructor(props){
    super(props);
    this.state = {
      totalItem: 3,
      currentSlide: 0,
      prevSlide: 2,
      nextSlide: 1,
      display:[
        {
          image: DummyImage,
          title: 'Bumi Manusia',
          author: 'Pramodya Anantatoer'
        },
        {
          image: DummyImage2,
          title: 'Dilan',
          author: 'Pidi Baiq'
        },
        {
          image: DummyImage3,
          title: 'Kambing Jantan',
          author: 'Raditya Dika'
        }
      ]
    }
  } 

  prev = ()=>{
    this.setState({
      currentSlide: this.state.nextSlide,
      prevSlide: this.state.currentSlide,
      nextSlide: this.state.prevSlide,
    });
  }
  
  next = ()=>{
    this.setState({
      currentSlide: this.state.prevSlide,
      prevSlide: this.state.nextSlide,
      nextSlide: this.state.currentSlide,
    });
  }
  
  render(){
    return(
      <div className='carousel-container'>
        <div className='prev-carousel'>
          <div className='prev-image'>
            <img src={this.state.display[this.state.prevSlide].image}></img>
          </div>
          <div className='prev-image-title'>
            <p className='books-title' style={{fontSize:'1.5rem', fontWeight:'600'}}>{this.state.display[this.state.prevSlide].title}</p>
            <p className='books-author' style={{marginTop:'-2%'}}>{this.state.display[this.state.prevSlide].author}</p>
          </div>
        </div>

        <div className='main-carousel'>
          <div className='arrow'>
            <i className="fa fa-chevron-left" onClick={this.prev}></i>
            <i className="fa fa-chevron-right" onClick={this.next}></i>         
          </div>
          <div className='main-image'>
            <img src={this.state.display[this.state.nextSlide].image} style={{right:'-100%', position:'absolute'}} className='next-slide'></img>
            <img src={this.state.display[this.state.prevSlide].image} style={{left:'-100%', position:'absolute'}} className='prev-slide'></img>
            <img src={this.state.display[this.state.currentSlide].image} className='current-slide'></img>
          </div>
          <div className='image-title'>
            <p className='books-title' style={{fontSize:'2rem', fontWeight:'600'}}>{this.state.display[this.state.currentSlide].title}</p>
            <p className='books-author'>{this.state.display[this.state.currentSlide].author}</p>
          </div>
        </div>

        <div className='next-carousel'>
        <div className='next-image'>
          <img src={this.state.display[this.state.nextSlide].image}></img>
        </div>
        <div className='next-image-title'>
            <p className='books-title' style={{fontSize:'1.5rem', fontWeight:'600'}}>{this.state.display[this.state.nextSlide].title}</p>
            <p className='books-author' style={{marginTop:'-2%'}}>{this.state.display[this.state.nextSlide].author}</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Carousel;

