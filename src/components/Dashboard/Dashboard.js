import React, { Component } from 'react';
import Profile from '../Dashboard/composition/Profile';
import Navbar from '../Dashboard/composition/Navbar';
import Carousel from '../Dashboard/composition/Carousel';
import Cards from './composition/Cards';

import DummyImage from '../Dashboard/assets/images/BumiManusia.jpg';
import DummyImage2 from '../Dashboard/assets/images/dilan.jpg';
import DummyImage3 from '../Dashboard/assets/images/kambing_jantan.jpg'

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: true,
      books: [
      {
        id: 1,
        image: DummyImage,
        title: 'Bumi Manusia',
        author: 'Pramodya Anantatoer',
        description: 'Lorem Ipsum Dolor Sit Amet'
      },
      {
        id: 2,
        image: DummyImage2,
        title: 'Dilan',
        author: 'Pidi Baiq',
        description: 'Lorem Ipsum Dolor Sit Amet'
      },
      {
        id: 3,
        image: DummyImage3,
        title: 'Kambing Jantan',
        author: 'Raditya Dika',
        description: 'Lorem Ipsum Dolor Sit Amet'
      },
      {
        id: 4,
        image: DummyImage,
        title: 'Bumi Manusia',
        author: 'Pramodya Anantatoer',
        description: 'Lorem Ipsum Dolor Sit Amet'
      },
      {
        id: 5,
        image: DummyImage2,
        title: 'Dilan',
        author: 'Pidi Baiq',
        description: 'Lorem Ipsum Dolor Sit Amet'
      },
      ]
    }
  }
  
  render(){
    return(
      <div style={{overflow:'hidden'}}>
          <Profile />
          <Navbar />
          <div className='main' 
            style={
              {position:'relative', 
              left:'7.5%', 
              width: '85%', 
              marginTop: '2%'}
            }
          >
            <Carousel />
            <Cards books={this.state.books}/>
          </div>
      </div>
    )
  }
}

export default Dashboard;
