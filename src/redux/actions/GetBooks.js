import axios from 'axios'

export const getBooks = token =>{
  return {
    type: 'GETBOOKS',
    payload: axios(
      {
      method: 'GET',
      url: 'http://localhost:3000/user',
      headers: {
        Authorization: token
      }
    })
  }
}