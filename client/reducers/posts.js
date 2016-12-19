// reducer takes 2 items:
// 1. the action (info about what happened)
// 2. copy of the current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      return [
        ...state.slice(0,i), // before we update
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after we update
      ]
    default:
      return state;
  }
}

export default posts;
