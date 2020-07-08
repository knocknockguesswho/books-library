import React, { Component } from 'react';
import Modal from '../topping/Modal';
import SuccessPopUp from '../topping/SuccessPopup';
import parse from 'html-react-parser';
import axios from 'axios';
import { connect } from 'react-redux';



class Book extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: this.props.data,
      editStatus: false,
      deleteStatus: false,
      action: 'Edit Data',
      name: this.props.name,
      role: this.props.role
    }
  }


  handleDeleteData = (event) =>{
    event.preventDefault();
    const token = this.props.Auth.data.token;
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/admin/${this.props.data.id}`,
      headers: {
        Authorization: token
      }
    })
    .then((res)=>{
      this.handlePopUpDelete()
      console.log(res);
      window.location.reload(false)
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  handlePopUpEdit = () =>{
    if(this.state.role===1){
      this.setState({
      editStatus: !this.state.editStatus
      })
    }
    console.log(this.props)
  }

  handlePopUpDelete = () =>{
    if(this.state.role===1){
      this.setState({
        deleteStatus: !this.state.deleteStatus
      })
    }
  }

  backHome = () =>{
    this.props.getBookDetail()
    this.setState({
      editStatus: false
    })
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
      display: 'flex',
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
      userSelect: 'none'
    }

    const back_home = {
      position:'absolute', 
      width:'60px', 
      height:'60px', 
      top:'2%', 
      left:'1%', 
      zIndex:'1', 
      backgroundColor:'white', 
      fontSize:'2rem', 
      textAlign:'center', 
      borderRadius:'50%', 
      boxShadow: '0 4px 6px 0 rgba(0, 0, 0, .3)', 
      cursor:'pointer'
    }

    
    return(
      <>
      <div style={{
      backgroundColor:'white', 
      width:'100vw', 
      height:'1007px', 
      display: 'flex',
      flexDirection: 'column'}}>
        <div style={banner}>
        <div style={{width:'100%'}}>
          <div onClick={this.backHome} style={back_home}>
            <i className="fa fa-arrow-left" style={{verticalAlign:'-35%', color:'#424242'}}> </i>
          </div>
          <div style={edit__delete}>
            <div style={{margin:'0 5%', cursor:'pointer'}} onClick={this.handlePopUpEdit}>
              Edit
            </div>
            <div style={{margin:'0 5%', cursor:'pointer'}} onClick={this.handleDeleteData}>
              Delete
            </div>
          </div>
        </div>
          <img src={`http://localhost:3000/uploads/${this.props.data.image}`} style={banner_image}></img>
        </div>
        <div style={main_modal}>
          <div style={description}>
            <div style={{width:'100%'}}>
              <p style={{height:'30px', width:'78.953px', marginBottom:'1%', backgroundColor:'#FBCC38', borderRadius:'.8em', textAlign:'center', paddingTop:'.4%', color:'white '}}>Novel</p>
              <h1 style={{fontWeight:'700', fontSize:'3rem'}}>{this.props.data.title}</h1>
              <h5 style={{fontWeight:'700'}}>30 Juni 2019</h5>
              <p style={{color:'#99D815', fontWeight:'600', fontSize:'2em', float:'right', transform:'translateY(-200%)'}}>Available</p>
            </div>
            <p style={{marginTop:'2%', fontSize:'1.2em', fontWeight:'500'}}>{this.props.data.description}</p>
          </div>
          <div style={borrow_button_container}>
            <img src={`http://localhost:3000/uploads/${this.props.data.image}`} style={{maxWidth:'250px', backgroundColor:'#FBCC38', margin:'0 auto', boxShadow: '0 4px 6px 0 rgba(0, 0, 0, .3)', borderRadius:'.8em'}}></img>
            <div style={{height:'50px', width:'150px', backgroundColor:'#FBCC38', margin:'0 auto', position:"relative", bottom:'-250px', color:'white', paddingTop:'3%', borderRadius:'.8em', boxShadow: '0 2px 6px 0 rgba(0, 0, 0, .3)', cursor:'pointer'}}>Borrow</div>
          </div>
        </div>
        <Modal status={this.state.editStatus} action={this.state.action} handlePopUp={this.handlePopUpEdit} data={this.props}/>
        <SuccessPopUp title={this.props.data.title} 
        status={this.state.deleteStatus} 
        handlePopUp={this.handlePopUpDelete}
        message={parse(`Data <b>${this.props.data.title}</b> berhasil dihapus!`)}
        />
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  Auth: state.Auth
});


export default connect(
  mapStateToProps,
  )(Book)