import axios from 'axios';


export const BorrowBook = (token, book_id, role) =>{
  return{
    type: 'BORROWBOOK',
    payload: axios(
      {
        method: 'PUT',
        url: `http://localhost:3000/member/borrow/${book_id}`,
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