const token = (state = { requesting: false, token: null }, action) => {
    switch (action.type) {
        case 'GET_TOKEN':
            return Object.assign({}, {
                requesting: true
            }, state);
        case 'SET_TOKEN':
            return Object.assign({}, {
                requesting: false,
                token: action.token
            }, state);
        default:
            return state;
    }
}

export default token;
