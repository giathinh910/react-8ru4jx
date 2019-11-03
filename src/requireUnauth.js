import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function requireUnauth(ToBeValidatedComponent) {
    class Authentication extends React.Component {
        componentWillMount() {
            if (this.props.auth) {
                this.props.history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (nextProps.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ToBeValidatedComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return {
            auth: state.auth
        }
    };

    return withRouter(connect(mapStateToProps)(Authentication));
}