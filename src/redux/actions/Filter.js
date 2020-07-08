export const FilterCategoryInput = (type)=>{
  return{
    type: type
  }
}

export const FilterDateInput = (type, input)=>{
  return{
    type: type,
    input: input
  }
}

export const Search = input=>{
  return{
    type: 'Search',
    input: input
  }
}