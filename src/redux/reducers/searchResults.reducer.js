
const searchResults = (state = [], action) =>{
  switch(action.type) {
    case 'SET_GIFS':
      return action.payload.data.data
    default:
      return state
  }
}

export default searchResults;