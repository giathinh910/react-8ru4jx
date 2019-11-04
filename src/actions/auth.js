export const setAuth = value => ({
    type: 'SET_AUTH',
    value
});

export const getToken = code => ({
    type: 'GET_TOKEN',
    code
});

export const setToken = token => ({
    type: 'SET_TOKEN',
    token
});
