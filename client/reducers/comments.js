function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
    // return new state with added comment
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // console.log('remove a comment from author');
      // need to return new state without comment
      return [
        // from intial0 to chosen deletion
        ...state.slice(0,action.i),
        // after deleted comment to include remaining
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // overwrite
      [action.postId] : postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
