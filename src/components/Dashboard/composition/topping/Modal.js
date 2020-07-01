import React, { Component } from 'react';
import axios from 'axios'

class Modal extends Component{
  constructor(props){
      super(props);
      this.state = {
        image: '',
        title: '',
        description: ''
      }
  }


  handleAddData = (event)=>{
    event.preventDefault();
    const token = localStorage.getItem('token')
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('image', this.state.image);
    axios({
      method: 'POST',
      url: 'localhost:3000/admin/post/book_table',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      }
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  render(){
    const popUp_inActive = {
      visibility: 'hidden',
      opacity: '0',
      transition: 'visibility .1s, opacity .1s linear',
      cursor: 'default',
      zIndex: '99',
      position: 'absolute',
      width: '1200px',
      height:'950px',
      top: '7%',
      left: '450px'
      
    }
    
    const popUp_active = {
      visibility: 'visible',
      opacity: '1',
      transition: 'all .1s opacity .1s linear',
      cursor: 'default',
      zIndex: '99',
      position: 'absolute',
      width: '1200px',
      height:'950px',
      top: '7%',
      left: '450px'

    }

    const modal_container = {
      width: '100%',
      height: '100%',
      padding: '10%, 15%'
    }

    const modal_input ={
      backgroundColor: 'white',
      width: '90%',
      height: '90%',
      margin: 'auto auto',
      boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .3)',
      borderRadius: '1.5em'
    }

    const close_button ={
      color: 'red',
      fontSize: '2em',
      position: 'absolute',
      right: '8%',
      top: '2%',
      cursor: 'pointer'
    }

    const form_style = {
      position:'relative',
      top: '12%',
      height:'90%',
      padding: '0% 5%'
    }

    const form_label = {
      width:'20%',
      height:'100%',
      fontSize:'1.5em',
      paddingTop: '1%'
    }

    const form_container = {
      width:'80%',
      height:'100%'
    }

    const save_button = {
      backgroundColor: '#FBCC38',
      border: 'none',
      width: '15%',
      height: '60%',
      color: '#fffdfd',
      fontSize: '1.2em',
      borderRadius: '.4em'
    }

    return(
      <>
        <div style={this.props.status ? popUp_active : popUp_inActive}>
          <div style={modal_container}>
            <div style={modal_input}>
              <div style={close_button} onClick={this.props.handlePopUp}>&#10006;</div>
              <form style={form_style} onSubmit={this.handleAddData}>
                <h3 style={{marginBottom:'5%'}}>{this.props.action}</h3>
                <div style={{height:'10%', display: 'flex', flexDirection:'row'}}>
                  <div style={form_label}>Image URL</div>
                  <div style={form_container}>
                    <input type='file' placeholder='Image URL...' required autoComplete='off' onChange={(e)=>this.setState({image: e.target.files})}></input>
                  </div>
                </div>
                <div style={{height:'10%', display: 'flex', flexDirection:'row'}}>
                  <div style={form_label}>Title</div>
                  <div style={form_container}>
                  <input type='text' placeholder='Title...' style={{width:'100%', height:'80%', padding:'0 2%', borderRadius:'.5em', border:'.8px solid #42424250'}} required autoComplete='off' value={this.state.title} onChange={(e)=>this.setState({title: e.target.value})}></input>
                  </div>
                </div>
                <div style={{height:'45%', lineHeight:'-100%',display: 'flex', flexDirection:'row'}}>
                  <div style={form_label}>Description</div>
                  <div style={form_container}>
                  <textarea type='text' placeholder='Description...' style={{width:'100%', height:'80%', padding:'0 2%', borderRadius:'.5em', border:'.8px solid #42424250', resize:'none'}} required autoComplete='off' value={this.state.description} onChange={(e)=>this.setState({description: e.target.value})}></textarea>
                  </div>
                </div>
                <div style={{height:'10%', marginTop:'1%', textAlign:'right'}}>
                  <button style={save_button}>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Modal;
