import axios from 'axios'

export const getBooks = token =>{
  return {
    type: 'GETBOOKS',
    payload: axios(
      {
      method: 'GET',
      url: 'http://localhost:3000/admin',
      headers: {
        Authorization: token
      }
    })
  }
}