const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    successMsg: ''
}

const Interface = ( state = initialState, action)=>{
  switch (action.type){
    case 'DELETEBOOK_PENDING':
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'DELETEBOOK_REJECTED':
      return{
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response
      }
    case 'DELETEBOOK_FULFILLED':
      return{
        ...state,
        isLoading: false,
        isError: false,
        successMsg: action.payload.response
      }
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
    case 'ADDBOOK_PENDING':
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'ADDBOOK_REJECTED':
      return{
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response
      }
    case 'ADDBOOK_FULFILLED':
      return{
        ...state,
        isLoading: false,
        isError: false,
        successMsg: action.payload.response
      }
    case 'EDITBOOK_PENDING':
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'EDITBOOK_REJECTED':
      return{
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response
      }
    case 'EDITBOOK_FULFILLED':
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