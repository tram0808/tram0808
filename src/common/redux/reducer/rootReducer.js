import filtemodeReducer from './filtemodeReducer';
import wordsReducer from './wordsReducer';
import shouldShowformReducer from './shouldShowformReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    words: wordsReducer,
    filtermode: filtemodeReducer,
    shouldShowform: shouldShowformReducer,
});

export default reducer;