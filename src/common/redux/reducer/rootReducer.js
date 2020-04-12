import filtemodeReducer from './src/common/redux/reducer/filtemodeReducer';
import wordsReducer from './src/common/redux/reducer/wordsReducer';
import shouldShowformReducer from './src/common/redux/reducer/shouldShowformReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    words: wordsReducer,
    filtermode: filtemodeReducer,
    shouldShowform: shouldShowformReducer,
});

export default rootReducer;