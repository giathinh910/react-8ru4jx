const auth = (state = false, action) => {
    switch(action.type) {
        case 'SET_AUTH':
            return action.value;
        default:
            return state;
    }
}

export default auth;
