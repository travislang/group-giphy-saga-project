
const favoriteList = (state =[], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload]
    default:
      return state
  }
}

export default favoriteList;