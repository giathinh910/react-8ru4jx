import React, { Fragment } from 'react';
import { setAuth } from './actions';
import { connect } from 'react-redux';
import requireUnauth from './requireUnauth';
import queryString from 'query-string';

let Authenticate = ({ onLoginClick, requestAccessToken, location }) => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const oauthUrl = clientId ? `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo` : '';
    const { code } = queryString.parse(location.search);

    if (code) {
        requestAccessToken(code);
        return (
            <Fragment>Authenticating ...</Fragment>
        );
    }

    if (oauthUrl) {
        return (
            <Fragment>
                {/* <button onClick={onLoginClick}>Log in</button> */}
                <a href={oauthUrl}>Authenticate</a>
            </Fragment>
        )
    } else {
        return (
            <Fragment>No ClientID</Fragment>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: () => {
            dispatch(setAuth(true));
        },
        requestAccessToken: (code) => {
        }
    }
}

Authenticate = requireUnauth(connect(undefined, mapDispatchToProps)(Authenticate));

export default Authenticate;
