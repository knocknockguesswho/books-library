const initialState = {
  isLoading: false,
  isError: false,
  isFiltering: false,
  isSearching: false,
  errorMsg: '',
  filterResult: '',
  searchResult: ''
}

const Filter = (state = initialState, action) =>{
  switch(action.type){
    case 'Romance':
      return{
        ...state,
        isSearching: false,
        isFiltering: true,
        filterResult: 'Romance'
      }
    case 'Technology':
      return{
        ...state,
        isSearching: false,
        isFiltering: true,
        filterResult: 'Technology'
      }
    case 'Politic':
      return{
        ...state,
        isSearching: false,
        isFiltering: true,
        filterResult: 'Politic'
      }
    case 'All Categories':
      return{
        ...state,
        isSearching: false,
        isFiltering: true,
        filterResult: ''
      }
    // case 'Today_PENDING':
    //   return{
    //     ...state,
    //     isLoading: true,
    //     isError: false,
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'Today_REJECTED':
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     errorMsg: 'Something Bad Happened',
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'Today_FULFILLED':
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'ThisWeek_PENDING':
    //   return{
    //     ...state,
    //     isLoading: true,
    //     isError: false,
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'ThisWeek_REJECTED':
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     errorMsg: 'Something Bad Happened',
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'ThisWeek_FULFILLED':
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'ThisMonth_PENDING':
    //   return{
    //     ...state,
    //     isLoading: true,
    //     isError: false,
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'ThisMonth_REJECTED':
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     errorMsg: 'Something Bad Happened',
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'ThisMonth_FULFILLED':
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'ThisYear_PENDING':
    //   return{
    //     ...state,
    //     isLoading: true,
    //     isError: false,
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'ThisYear_REJECTED':
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     errorMsg: 'Something Bad Happened',
    //     filterResult: action.payload.response.data.data
    //   }
    // case 'ThisYear_FULFILLED':
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     filterResult: action.payload.response.data.data
    //   }
    case 'Search':
      return{
        ...state,
        isFiltering: false,
        isSearching: true,
        searchResult: action.input
      }
    default:
      return state;
  }
}

export default Filter;