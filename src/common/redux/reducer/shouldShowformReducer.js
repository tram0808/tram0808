export default function shouldShowformReducer(state = false, action ){
    if (action.type === 'ON_TOGGLE_FORM') {
        return action.shouldShowform;
    }
    if (action.type === 'ON_ADD_WORD') {
      return action.words;
    }
    return state;
}