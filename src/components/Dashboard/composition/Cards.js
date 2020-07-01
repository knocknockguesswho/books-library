import React, { Component } from 'react';
import Card from '../composition/topping/Card'
import '../assets/styles/Cards.css'


class Cards extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div style={{paddingTop:'10%', width:'95%', margin:'0 auto 0 auto'}}>
        <p style={{fontWeight:'600', fontSize:'2em', color:'#424242', marginLeft:'2.5%'}}>List Book</p><hr></hr>
            <div className='card-container'>
                {this.props.books.map((book, index)=>{
                    return <Card key={index} data={book} hisory={this.props.history} location={this.props.location} match={this.props.match}/>
                })}
            </div>
      </div>
    )
  }
}
export default Cards;