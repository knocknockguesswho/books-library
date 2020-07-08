const initialState = {
  isLoading: false,
  isError: false,
  isFilteringCategory: false,
  isFilteringDate: false,
  isSearching: false,
  errorMsg: '',
  filterType: '',
  searchResult: '',
  filterDateResult: ''
}

const Filter = (state = initialState, action) =>{
  switch(action.type){
    case 'Romance':
      return{
        ...state,
        isSearching: false,
        isFilteringDate: false,
        isFilteringCategory: true,
        filterType: 'Romance'
      }
    case 'Technology':
      return{
        ...state,
        isSearching: false,
        isFilteringDate: false,
        isFilteringCategory: true,
        filterType: 'Technology'
      }
    case 'Politic':
      return{
        ...state,
        isSearching: false,
        isFilteringDate: false,
        isFilteringCategory: true,
        filterType: 'Politic'
      }
    case 'All Categories':
      return{
        ...state,
        isSearching: false,
        isFilteringDate: false,
        isFilteringCategory: true,
        filterType: ''
      }
    case 'Today':
      return{
        ...state,
        isSearching: false,
        isFilteringCategory: false,
        isFilteringDate: true,
        filterType: action.type,
        filterDateResult: action.input-86400000
      }
    case 'This Week':
      return{
        ...state,
        isSearching: false,
        isFilteringCategory: false,
        isFilteringDate: true,
        filterType: action.type,
        filterDateResult: action.input-604800000
      }
    case 'This Month':
      return{
        ...state,
        isSearching: false,
        isFilteringCategory: false,
        isFilteringDate: true,
        filterType: action.type,
        filterDateResult: action.input-2592000000
      }
    case 'All Time':
      return{
        ...state,
        isSearching: false,
        isFilteringCategory: false,
        isFilteringDate: true,
        filterType: action.type,
        filterDateResult: ''
      }
    case 'Search':
      return{
        ...state,
        isFilteringCategory: false,
        isFilteringDate: false,
        isSearching: true,
        searchResult: action.input
      }
    default:
      return state;
  }
}

export default Filter;