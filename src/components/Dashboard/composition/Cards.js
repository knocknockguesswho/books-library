import React, { Component } from 'react';
import Card from '../composition/topping/Card';
import '../assets/styles/Cards.css';
import PaginationData from '../composition/topping/Pagination';
import { connect } from 'react-redux';
import { Search } from '../../../redux/actions/Filter'


class Cards extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props)
  }
  
  
  render(){
    let filteredData = this.props.books.filter(
      (book)=>{
        if (this.props.Filter.isSearching!==false){
          return book.title.toLowerCase().indexOf(this.props.Filter.searchResult) !== -1
        } else if(this.props.Filter.isFiltering!==false){
          return book.genre.indexOf(this.props.Filter.filterResult) !== -1
        } else{
          return book
        }
      }
    )
    return(
      <div style={{paddingTop:'10%', width:'95%', margin:'0 auto 0 auto'}}>
        <div>
          <p style={{fontWeight:'600', fontSize:'2em', color:'#424242', marginLeft:'2.5%'}} onClick={this.test}>List Book</p>
          <div style={{width:'100%'}}>
            {/* <PaginationData /> */}
          </div>
          {/* <div style={{marginLeft:'2.5%', display:'flex'}}>
            <p style={{marginRight:'2%'}}>Filter: <i>Romance</i></p>
            <p style={{marginRight:'2%'}}>Search: <i>...</i></p>
          </div> */}
        </div>
        <hr></hr>
            <div className='card-container'>
                {filteredData.map((book, index)=>{
                    return <Card key={index} data={book} username={this.props.Auth.data.username} role={this.props.Auth.data.role} {...this.props}/>
                })}
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  Filter: state.Filter,
  Books: state.Books
})

const mapDispatchToProps = { Search }

export default connect(mapStateToProps, mapDispatchToProps)(Cards);