import React, { Component } from 'react'
import '../assets/styles/Navbar.css';
import logo from '../assets/images/bookshelf.png'
import { Search, FilterCategoryInput, FilterDateInput } from '../../../redux/actions/Filter';
import { connect } from 'react-redux'

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state ={
      collapsed_a: false,
      collapsed_b: false,
      searchInput: '',
      filterInput: ''
    }
  }
  menuDropdown_A=()=>{
    if(this.state.collapsed_b===true){
      this.setState({collapsed_b: false})
    }
    this.setState({
      collapsed_a: !this.state.collapsed_a
    })
    console.log(this.props)
  }
  
  menuDropdown_B=()=>{
    if(this.state.collapsed_a===true){
      this.setState({collapsed_a: false})
    }
    this.setState({
      collapsed_b: !this.state.collapsed_b
    })
  }

  searchInput = (event)=> {
    const SearchResult = event
    this.props.Search(SearchResult)
  }

  filterCategoryInput = (type) => ()=>{
    this.props.FilterCategoryInput(type)
    this.menuDropdown_A();
  }

  filterDateInput = (type, input) => ()=>{
    this.props.FilterDateInput(type, input)
    this.menuDropdown_B();
    console.log(this.props)
  }

  
  
  render(){
    // filter format by date created
    // let created_at = this.props.data.created_at.split('T');
    let date = new Date();
    let ms = date.getTime()
    // let dateToISO = date.toISOString().split('T')

    
    let filterCategoryResult = () =>{
      if(this.props.Filter.filterType==''){
        return 'All Categories'
      }
      return this.props.Filter.filterType
    } 

    let filterDateResult = () =>{
      if(this.props.Filter.filterType==''){
        return 'All Time'
      }
      return this.props.Filter.filterType
    }

    return(
      <div className='navbar-container'>

        <div className='menu-container'>
          <div className='menu-a'>
            <span onClick={this.menuDropdown_A}>{this.props.Filter.isFilteringCategory ? filterCategoryResult() : 'All Categories'} &#9662;</span>
              <div className={this.state.collapsed_a==true?'submenu-a' : 'submenu-a inactive'}>
              <ul>
                <li onClick={this.filterCategoryInput('Romance')} href='#display'>Romance</li>
                <li onClick={this.filterCategoryInput('Technology')}>Technology</li>
                <li onClick={this.filterCategoryInput('Politic')}>Politic</li>
                <li onClick={this.filterCategoryInput('All Categories')}>All Categories</li>
              </ul>
              </div>
          </div>
          <div className='menu-b'>
            <span onClick={this.menuDropdown_B}>{this.props.Filter.isFilteringDate ? filterDateResult() : 'All Time'} &#9662;</span>
              <div className={this.state.collapsed_b==true?'submenu-b' : 'submenu-b inactive'}>
              <ul>
                <li onClick={this.filterDateInput('Today', ms)}>Today</li>
                <li onClick={this.filterDateInput('This Week', ms)}>This Week</li>
                <li onClick={this.filterDateInput('This Month', ms)}>This Month</li>
                <li onClick={this.filterDateInput('All Time', ms)}>All Time</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className='search-input'>
            {/* <i class="fa fa-search" style={{opacity: '.3'}}></i> */}
            <input type='text' name='search' placeholder='Search book' value={this.props.Search.input} aria-label='Search' autoComplete='off' onChange={(event)=>this.searchInput(event.target.value)}></input>
        </div>
        <div className='logo-book'>
        <div style={{width:'max-content', textAlign:'right'}}>
          <img src={logo} style={{width:'70%', marginTop:'5%'}}></img>
        </div>
        <div style={{float:'right', marginTop:'15%'}}>
          <h4 style={{fontSize:'2em', fontWeight:'700', color:'#424242'}}>Library</h4>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  Auth: state.Auth,
  Books: state.Books,
  Filter: state.Filter
});

const mapDispatchToProps = { Search, FilterCategoryInput, FilterDateInput }

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Navbar)