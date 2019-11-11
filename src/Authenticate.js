import React, { Fragment } from 'react';
import { getToken } from './actions/auth.action';
import { connect } from 'react-redux';
import requireUnauth from './requireUnauth';
import queryString from 'query-string';

class Authenticate extends React.Component {
    authenticating = false;
    code = null;

    constructor(props) {
        super(props);
        this.getToken();
    }

    getToken() {
        const { code } = queryString.parse(this.props.location.search);
        const { token } = this.props;
        if (!token && code) {
            this.code = code;
            this.props.exchangeToken(code);
        }
    }

    render() {
        const clientId = process.env.REACT_APP_CLIENT_ID;
        const oauthUrl = clientId ? `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo` : '';
        const { token } = this.props;

        if (!token && this.code) {
            return (
                <Fragment>Authenticating ...</Fragment>
            );
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
    }
};

const mapStateToProps = store => {
    const { token } = store.auth;
    return {
        token
    }
}

const mapDispatchToProps = {
    exchangeToken: (code) => getToken(code)
}

export default requireUnauth(connect(mapStateToProps, mapDispatchToProps)(Authenticate));
