import {createStore, combineReducers} from 'redux';

const defaultWords = [
    {id: '1', en: 'One', vn: 'Mot', isMemorized: true},
    {id: '2', en: 'Two', vn: 'Hai', isMemorized: false},
    {id: '3', en: 'Three', vn: 'Ba', isMemorized: false},
    {id: '4', en: 'Four', vn: 'Bon', isMemorized: false},
    {id: '5', en: 'Five', vn: 'Nam', isMemorized: false},
    {id: '6', en: 'Six', vn: 'Sau', isMemorized: true},
    {id: '7', en: 'Seven', vn: 'Bay', isMemorized: false},
    {id: '8', en: 'Eight', vn: 'Tam', isMemorized: true},
    {id: '9', en: 'Nine', vn: 'Chin', isMemorized: false},
    {id: '10', en: 'Ten', vn: 'Muoi', isMemorized: true},
];


function wordsReducer(state = defaultWords, action ){
    if (action.type === 'ON_ADD_WORD') {
        return action.words;
    }
    if (action.type === 'ON_REMOVE_WORD') {
        return action.words
    }
    if (action.type === 'ON_TOGGLE_MEMORIZED_WORD') {
      return action.words;
    }
    return state;
}
function filtemodeReducer(state ='Show_All', action ){
    if (action.type === 'ON_SET_FILTER_MODE') {
      return action.filtermode;
    }
    return state;
}
function  shouldShowformReducer(state = false, action ){
    if (action.type === 'ON_TOGGLE_FORM') {
        return action.shouldShowform;
    }
    if (action.type === 'ON_ADD_WORD') {
      return action.words;
    }
    return state;
}

const reducer = combineReducers({
    words: wordsReducer,
    filtermode: filtemodeReducer,
    shouldShowform: shouldShowformReducer,
});

const store = createStore(reducer);


  export default store;