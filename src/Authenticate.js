import React, { Fragment } from 'react';
import { setAuth, getToken } from './actions/auth';
import { connect } from 'react-redux';
import requireUnauth from './requireUnauth';
import queryString from 'query-string';

let Authenticate = ({ exchangeToken, location, requesting, token }) => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const oauthUrl = clientId ? `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo` : '';
    const { code } = queryString.parse(location.search);

    if (!token && code) {
        exchangeToken(code);
        return (
            <Fragment>Authenticating ...</Fragment>
        );

        // return (
        //     <Fragment>Authenticated</Fragment>
        // );
    }

    if (oauthUrl) {
        return (
            <Fragment>
                <a href={oauthUrl}>Authenticate</a>
            </Fragment>
        )
    } else {
        return (
            <Fragment>No ClientID</Fragment>
        )
    }
};

const mapStateToProps = store => {
    const {requesting, token} = store.token;
    return {
        requesting, token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: () => {
            dispatch(setAuth(true));
        },
        exchangeToken: (code) => {
            dispatch(getToken(code))
        }
    }
}

Authenticate = requireUnauth(connect(mapStateToProps, mapDispatchToProps)(Authenticate));

export default Authenticate;
