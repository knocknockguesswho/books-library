import React, { Component } from 'react';
import '../topping/assets/styles/Book.css'
import Modal from '../topping/Modal';
import SuccessPopUp from '../topping/SuccessPopup';
import FailPopup from '../topping/FailPopup';
import parse from 'html-react-parser';
import { connect } from 'react-redux';
import { BorrowBook, DeleteBook } from '../../../../redux/actions/Interface'



class Book extends Component{
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
    this.props.getBookDetail()
    this.setState({
      editStatus: false
    })
    console.log(this.props)
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
              <p style={{height:'30px', width:'78.953px', marginBottom:'1%', backgroundColor:'#FBCC38', borderRadius:'.8em', textAlign:'center', paddingTop:'.4%', color:'white '}}>{this.props.data.type}</p>
              <h1 style={{fontWeight:'700', fontSize:'3rem'}}>{this.props.data.title}</h1>
              <h5 style={{fontWeight:'700'}}>30 Juni 2019</h5>
              <p style={{color:'#99D815', fontWeight:'600', fontSize:'2em', float:'right', transform:'translateY(-200%)'}}>{this.props.data.status}</p>
            </div>
            <p style={{marginTop:'2%', fontSize:'1.2em', fontWeight:'500'}}>{this.props.data.description}</p>
          </div>
          <div style={borrow_button_container}>
            <img src={`http://localhost:3000/uploads/${this.props.data.image}`} style={{maxWidth:'250px', backgroundColor:'#FBCC38', margin:'0 auto', boxShadow: '0 4px 6px 0 rgba(0, 0, 0, .3)', borderRadius:'.8em'}}></img>
            <div className='borrow-button' onClick={this.borrowBook} style={{height:'50px', width:'150px', backgroundColor:'#FBCC38', margin:'0 auto', position:"relative", bottom:'-250px', color:'white', paddingTop:'3%', borderRadius:'.8em', boxShadow: '0 2px 6px 0 rgba(0, 0, 0, .3)', cursor:'pointer'}}>Borrow</div>
          </div>
        </div>
        <Modal status={this.state.editStatus} action={this.state.action} handlePopUp={this.handlePopUpEdit} data={this.props}/>
        <SuccessPopUp title={this.props.data.title} 
        status={this.state.deleteStatus} 
        handlePopUp={this.handlePopUpDelete}
        message={parse(`Data <b>${this.props.data.title}</b> berhasil dihapus!`)}
        />
        <SuccessPopUp title={this.props.data.title} 
        status={this.state.borrowStatus} 
        handlePopUp={this.handlePopUpBorrow}
        message={parse(`Buku <b>${this.props.data.title}</b> berhasil dipinjam!`)}
        />
        <FailPopup message={this.state.message} status={this.state.isError_local} handlePopUp={this.handleFailPopUp}/>
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
  )(Book)