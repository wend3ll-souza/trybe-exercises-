const INITIAL_STATE = [];

const todoReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return [...state, { id: Math.random(), text: action.text }];
        default:
            return state;
    }
}

export default todoReducer;