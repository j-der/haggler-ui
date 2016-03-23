import React from 'react';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';

import App from 'components/App';
import { Counter, About } from 'components/views';

/*
 *  This route config will determine which component
 *  to populate `this.props.children` with based on the current url.
 */

export default (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/" component={ Counter } />
      <Route path="/about" component={ About } />
    </Route>
  </Router>
);
