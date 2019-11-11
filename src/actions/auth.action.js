export const actions = {
    SET_AUTH: 'SET_AUTH',
    GET_TOKEN: 'GET_TOKEN',
    SET_TOKEN: 'SET_TOKEN',
}

export const setAuth = value => ({
    type: actions.SET_AUTH,
    value
});

export const getToken = code => ({
    type: actions.GET_TOKEN,
    code
});

export const setToken = token => ({
    type: actions.SET_TOKEN,
    token
});
