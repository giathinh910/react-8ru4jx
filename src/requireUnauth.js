import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function requireUnauth(ToBeValidatedComponent) {
    class Authentication extends React.Component {
        constructor(props) {
            super(props);
            if (this.props.loggedIn) {
                this.props.history.push('/');
            }
        }

        shouldComponentUpdate(nextProps) {
            if (nextProps.loggedIn) {
                this.props.history.push('/');
                return false;
            }
            return true;
        }

        render() {
            return <ToBeValidatedComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return {
            loggedIn: state.auth.loggedIn
        }
    };

    return withRouter(connect(mapStateToProps)(Authentication));
}
