import React, { Component } from 'react'
import '../assets/styles/Card.css'
import DummyImage from '../assets/images/BumiManusia.jpg';
import DummyImage2 from '../assets/images/dilan.jpg';
import DummyImage3 from '../assets/images/kambing_jantan.jpg'


class Card extends Component{
  constructor(props){
    super(props);
    this.state = {
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

  render(){
    return(
      <div style={{paddingTop:'10%', width:'95%', margin:'0 auto 0 auto'}}>

        <p style={{fontWeight:'600', fontSize:'2em', color:'#424242', marginLeft:'2.5%'}}>List Book</p><hr></hr>

        <div className='card-container'>
          <div className='card-content'>
            <div className='book-image'>
              <img src={this.state.display[0].image}></img>
            </div>
            <div className='book-caption'>
              <p style={{textAlign:'center', marginTop:'2%', fontSize:'1.2em', fontWeight:'600'}}>Bumi Manusia</p>
              <div className='caption' style={{marginTop:'-5%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor metus, dapibus nec dui vitae, commodo viverra ipsum.</div>
            </div>
          </div>
          <div className='card-content'>
            <div className='book-image'>
            <img src={this.state.display[1].image}></img>
            </div>
            <div className='book-caption'>
              <p style={{textAlign:'center', marginTop:'2%', fontSize:'1.2em', fontWeight:'600'}}>Dilan</p>
              <div className='caption' style={{marginTop:'-5%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor metus, dapibus nec dui vitae, commodo viverra ipsum.</div>
            </div>
          </div>
          <div className='card-content'>
            <div className='book-image'>
            <img src={this.state.display[2].image}></img>
            </div>
            <div className='book-caption'>
              <p style={{textAlign:'center', marginTop:'2%', fontSize:'1.2em', fontWeight:'600'}}>Kambing Jantan</p>
              <div className='caption' style={{marginTop:'-5%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor metus, dapibus nec dui vitae, commodo viverra ipsum.</div>
            </div>
          </div>
          <div className='card-content'>
            <div className='book-image'>
            <img src={this.state.display[2].image}></img>
            </div>
            <div className='book-caption'>
              <p style={{textAlign:'center', marginTop:'2%', fontSize:'1.2em', fontWeight:'600'}}>Kambing Jantan</p>
              <div className='caption' style={{marginTop:'-5%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor metus, dapibus nec dui vitae, commodo viverra ipsum.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Card;