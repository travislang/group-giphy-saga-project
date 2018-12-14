
const searchResults = (state = [], action) =>{
  switch(action.type) {
    case 'SET_GIFS':
      return action.payload.data.data;
    case 'CLEAR_GIFS':
      return [];
    default:
      return state;
  }
}

export default searchResults;
