import {RECEIVE_USER} from '../actions/auth_actions';

const initialState = {
    user: null,
}

// the below is based on the example from official react documentation,
// https://redux.js.org/tutorials/essentials/part-1-overview-concepts
function receiveUserReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === RECEIVE_USER) {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            user: "Drew" // placeholder
        }
    }
    // otherwise return the existing state unchanged
    return state
}