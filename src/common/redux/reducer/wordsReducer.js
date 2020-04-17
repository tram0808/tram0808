const defaultWords = [];

export default function wordsReducer(state = defaultWords, action ){
    if (action.type === 'ON_ADD_WORD') {
        const newWords = state.concat(action.word);
        return newWords;
    }
    if (action.type === 'ON_REMOVE_WORD') {
        const newWords = state.filter(word => word._id !== action._id);
        return newWords;
    }
    if (action.type === 'ON_TOGGLE_WORD') {
        const newWords = state.map(word =>{
            if(word._id === action.word._id){
                return{...word, isMemorized: action.word.isMemorized };
            }
            return word;
        })
      return newWords;
    }
    if(action.type === 'FETCH_DATA_WORDS'){
        return action.words;
    }
    return state;
}