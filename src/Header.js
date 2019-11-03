import React, { Fragment } from 'react';
import { setAuth } from './actions';
import { connect } from 'react-redux';

let Header = ({ onLogoutClick }) => {
  return (
    <Fragment>
      <button onClick={onLogoutClick}>Log out</button>
    </Fragment>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutClick: () => {
      dispatch(setAuth(false));
    }
  }
}

Header = connect(undefined, mapDispatchToProps)(Header);

export default Header;
