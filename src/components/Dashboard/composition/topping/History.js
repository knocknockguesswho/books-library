import React, { Component } from 'react';
import '../topping/assets/styles/Book.css'
import Modal from '../topping/Modal';
import SuccessPopUp from '../topping/SuccessPopup';
import FailPopup from '../topping/FailPopup';
import parse from 'html-react-parser';
import { connect } from 'react-redux';
import { BorrowBook, DeleteBook } from '../../../../redux/actions/Interface'



class History extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: this.props.data,
      editStatus: false,
      isError_local: false,
      message: '',
      deleteStatus: false,
      borrowStatus: false,
      action: 'Edit Data',
      name: this.props.Auth.data.name,
      role: this.props.Auth.data.role
    }
  }


  handleDeleteData = (event) =>{
    event.preventDefault();
    if(this.props.Auth.data.role===1){
      const token = this.props.Auth.data.token;
      const id = this.props.data.id
      this.props.DeleteBook(token, id)
      .then((res)=>{
        this.handlePopUpDelete()
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
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

  handlePopUpBorrow = () =>{
    this.setState({
      borrowStatus: true
    })
  }

  backHome = () =>{
    this.props.getHistoryDetail()
    // this.setState({
    //   editStatus: false
    // })
  }

  borrowBook = () =>{
    if(this.props.data.status==='Borrowed'){
      this.setState({
        isError_local: true,
        message: parse(`Sorry, the book you want to borrow is unavailable.`)
      })
      this.handleFailPopUp();
    } else{
      const token = this.props.Auth.data.token;
      const id = this.props.data.id;
      const role = this.handleRole(this.state.role)
      this.props.BorrowBook(token, id, role)
      .then((res)=>{
        this.handlePopUpBorrow();
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }

  handleFailPopUp = ()=>{
    this.setState({
      isError_local: !this.state.isError_local,
    })
  }

  handleRole = (param) =>{
    switch (param) {
      case 1:
        return 'admin';
      case 2:
        return 'member';
      case 3:
        return 'user';
    }
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
          </div>
        </div>
        
        
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  Auth: state.Auth,
  Interface: state.Interface
});

const mapDispatchToProps = { BorrowBook, DeleteBook }

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(History)