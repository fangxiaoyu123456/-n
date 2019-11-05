import {createStore} from 'redux'
function reducer(state={name:""},action){
    switch (action.type) {
        case 'change':
            state.name = action.payload
            return state
        default:
            return state;
    }
}
var store = createStore(reducer)
export default store
