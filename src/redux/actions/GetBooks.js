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


//get genre for entry books
export const GetAllGenre = token =>{
  return{
    type: 'GETALLGENRE',
    payload: axios(
      {
        method: 'GET',
        url: 'http://localhost:3000/admin/genre',
        headers: {
          Authorization: token
        }
      })
  }
}

//get authors for entry books
export const GetAllAuthor = token =>{
  return{
    type: 'GETALLAUTHOR',
    payload: axios(
      {
        method: 'GET',
        url: 'http://localhost:3000/admin/author',
        headers: {
          Authorization: token
        }
      })
  }
}