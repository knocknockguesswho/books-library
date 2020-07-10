import axios from 'axios';

export const DeleteBook = (token, book_id)=>{
  return{
    type: 'DELETEBOOK',
    payload: axios(
      {
      method: 'DELETE',
      url: `http://localhost:3000/admin/${book_id}`,
      headers: {
        Authorization: token
      }
    })
  }
}

export const BorrowBook = (token, book_id, role) =>{
  return{
    type: 'BORROWBOOK',
    payload: axios(
      {
        method: 'PUT',
        url: `http://localhost:3000/${role}/borrow/${book_id}`,
        headers: {
          Authorization: token
        }
      })
  }
}

export const ReturnBook = (token, book_id) =>{
  return{
    type: 'RETURNBOOK',
    payload: axios(
      {
        method: 'PUT',
        url: `http://localhost:3000/return/${book_id}`,
        headers: {
          Authorization: token
        }
      })
  }
}

export const AddBook = (token, data) =>{
  return{
    type: 'ADDBOOK',
    payload: axios(
      {
        method: 'POST',
        url: 'http://localhost:3000/admin/post/book_table',
        data: data,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token
        }
      })
  }
}

export const EditBook = (token, data, id) =>{
  return{
    type: 'EDITBOOK',
    payload: axios(
      {
        method: 'PUT',
        url: `http://localhost:3000/admin/${id}`,
        data: data,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token
        }
      })
  }
}