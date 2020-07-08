export const FilterInput = (type)=>{
  return{
    type: type
  }
}
// export const Technology = (type)=>{
//   return{
//     type: type
//   }
// }
// export const Politic = (type)=>{
//   return{
//     type: type
//   }
// }
// export const Today = (type)=>{
//   return{
//     type: type
//   }
// }
// export const ThisWeek = (type)=>{
//   return{
//     type: type
//   }
// }
// export const ThisMonth = (type)=>{
//   return{
//     type: type
//   }
// }
// export const ThisYear = (type)=>{
//   return{
//     type: type
//   }
// }



export const Search = input=>{
  return{
    type: 'Search',
    input: input
  }
}