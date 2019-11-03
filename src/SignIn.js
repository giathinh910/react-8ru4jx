import React, { Fragment } from 'react';
import { setAuth } from './actions';
import { connect } from 'react-redux';
import requireUnauth from './requireUnauth';

let SignIn = ({onLoginClick}) => {
    return (
        <Fragment>
            <button onClick={onLoginClick}>Log in</button>
        </Fragment>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: () => {
            dispatch(setAuth(true));
        }
    }
}

SignIn = requireUnauth(connect(undefined, mapDispatchToProps)(SignIn));

export default SignIn;
