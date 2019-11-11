import { actions } from "../actions/auth.action";

const defaultState = {
    loggedIn: false,
    token: null,
};

const auth = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_AUTH:
            return Object.assign({}, state, {
                loggedIn: action.value
            });
        case actions.SET_TOKEN:
            return Object.assign({}, state, {
                token: action.token
            });
        default:
            return state;
    }
}

export default auth;