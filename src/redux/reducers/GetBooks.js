const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: []
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
    default:
      return state;
  }
}

export default Books;