const initialState = {
    isLoading: false,
    isError: false,
    isBorrowed: false,
    errorMsg: '',
    successMsg: ''
}

const Interface = ( state = initialState, action)=>{
  switch (action.type){
    case 'BORROWBOOK_PENDING':
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'BORROWBOOK_REJECTED':
      return{
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response
      }
    case 'BORROWBOOK_FULFILLED':
      return{
        ...state,
        isLoading: false,
        isError: false,
        isBorrowed: true,
        successMsg: action.payload.response
      }
    case 'RETURNBOOK_PENDING':
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'RETURNBOOK_REJECTED':
      return{
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response
      }
    case 'RETURNBOOK_FULFILLED':
      return{
        ...state,
        isLoading: false,
        isError: false,
        successMsg: action.payload.response
      }
    default:
      return state;
  }
}

export default Interface;