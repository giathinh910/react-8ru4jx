const defaultState = {
    requesting: false,
    token: null
};

const token = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_TOKEN':
            console.log('GET_TOKEN');
            return Object.assign({}, state, {
                requesting: true
            });
        case 'SET_TOKEN':
            return Object.assign({}, state, {
                requesting: false,
                token: action.token
            });
        default:
            return state;
    }
}

export default token;
