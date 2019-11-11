import React, { Fragment } from 'react';
import Header from './Header';
import PullRequestStatistic from './PullRequestStatistic';
import requireAuth from './requireAuth';

const App = () => {
  return (
  <Fragment>
    <Header></Header>
    <PullRequestStatistic></PullRequestStatistic>
  </Fragment>
)};

export default requireAuth(App);
