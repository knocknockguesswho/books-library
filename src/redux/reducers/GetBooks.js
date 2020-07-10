const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
  genres: [],
  authors: []
}

const Books = (state = initialState, action)=>{
  switch (action.type){
    case 'GETBOOKS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'GETBOOKS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.data
      }
    case 'GETBOOKS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      }
    case 'GETALLGENRE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'GETALLGENRE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.data
      }
    case 'GETALLGENRE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        genres: action.payload.data.data
      }
    case 'GETALLAUTHOR_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'GETALLAUTHOR_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.data
      }
    case 'GETALLAUTHOR_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        authors: action.payload.data.data
      }
    default:
      return state;
  }
}

export default Books;