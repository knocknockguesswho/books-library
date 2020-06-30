import React, { Component } from 'react'


class Book extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: {...this.props.data}
    }
    console.log(this.props)
  }
  
  render(){


    const banner = {
      width: '100%',
      height: '100%',
      flex: '.9',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }
    
    const main_modal = {
      flex: '1.1',
      display: 'flex'
    }

    const description = {
      height: '100%',
      width: '100%',
      flex: '9',
      padding: '1% 5%'
    }

    const borrow_button_container = {
      textAlign:'center',
      flex: '3',
      position: 'relative',
      top:'-35%',
      boxSizing:'border-box'
    }
    
    const banner_image = {
      minWidth: '100%',
      position: 'relative',
      transform: 'translateY(-5%)'
    }

    const edit__delete = {
      position: 'absolute',
      right: '5%',
      top:'2%',
      zIndex: '1',
      display: 'flex',
      color:'#ffffff',
      opacity:'.9',
      fontSize:'1.5em',
      fontWeight:'500',
      textShadow: '1px 0px 2px rgba(0, 0, 0, .3)',
    }

    return(
      <div style={{
      backgroundColor:'white', 
      width:'100vw', 
      height:'992px', 
      display: 'flex',
      flexDirection: 'column'}}>
        <div style={banner}>
        <div style={{width:'100%'}}>
          <div style={{position:'absolute', width:'60px', height:'60px', top:'2%', left:'1%', zIndex:'1', backgroundColor:'white', fontSize:'2rem', textAlign:'center', borderRadius:'50%', boxShadow: '0 4px 6px 0 rgba(0, 0, 0, .3)', cursor:'pointer'}}>
            <i className="fa fa-arrow-left" style={{verticalAlign:'-35%', color:'#424242'}} onClick={this.props.getBookDetail}></i>
          </div>
          <div style={edit__delete}>
            <div style={{margin:'0 5%', cursor:'pointer'}}>
              Edit
            </div>
            <div style={{margin:'0 5%', cursor:'pointer'}}>
              Delete
            </div>
          </div>
        </div>
          <img src={this.state.books.image} style={banner_image}></img>
        </div>
        <div style={main_modal}>
          <div style={description}>
            <div style={{width:'100%'}}>
              <p style={{height:'30px', width:'78.953px', marginBottom:'1%', backgroundColor:'#FBCC38', borderRadius:'.8em', textAlign:'center', paddingTop:'.4%', color:'white '}}>Novel</p>
              <h1 style={{fontWeight:'700', fontSize:'3rem'}}>{this.state.books.title}</h1>
              <h5 style={{fontWeight:'700'}}>30 Juni 2019</h5>
              <p style={{color:'#99D815', fontWeight:'600', fontSize:'2em', float:'right', transform:'translateY(-200%)'}}>Available</p>
            </div>
            <p style={{marginTop:'2%', fontSize:'1.2em', fontWeight:'500'}}>{this.state.books.description}</p>
          </div>
          <div style={borrow_button_container}>
            <img src={this.state.books.image} style={{maxWidth:'250px', backgroundColor:'#FBCC38', margin:'0 auto', boxShadow: '0 4px 6px 0 rgba(0, 0, 0, .3)', borderRadius:'.8em'}}></img>
            <div style={{height:'50px', width:'150px', backgroundColor:'#FBCC38', margin:'0 auto', position:"relative", bottom:'-250px', color:'white', paddingTop:'3%', borderRadius:'.8em', boxShadow: '0 2px 6px 0 rgba(0, 0, 0, .3)', cursor:'pointer'}}>Borrow</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Book;