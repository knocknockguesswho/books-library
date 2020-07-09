const initialState = {
    isRegistered: false,
    isLogin: false,
    isLoading: false,
    errorMsg: '',
    data: {}
}

const Auth = (state=initialState, action)=>{
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case "LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data
      }
    case "LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data.data[0]
      }
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data
      }
    case "REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isRegistered: true
      }
    case "LOGOUT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {}
      }
    default:
      return state;
  }
}

export default Auth;