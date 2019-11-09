import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function requireAuth(ToBeValidatedComponent) {
    class Authentication extends React.Component {
        constructor(props) {
            super(props);
            if (!this.props.auth) {
                this.props.history.push('/authenticate');
            }
        }

        shouldComponentUpdate(nextProps) {
            if (!nextProps.auth) {
                this.props.history.push('/authenticate');
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