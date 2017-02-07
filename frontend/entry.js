import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Dashboard from './dashboard/components';
import Task from './task/components';
import Prompt from './task/components/prompt';
import MedicalReleaseForm from './task/components/medical_release_form';
import ConfirmPhysicians from './task/components/confirm_physicians';

import store from './store'; 


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="task/:id" component={Task}>
          <Route path="prompt" component={Prompt} />
          <Route path="medical-release-form/:id" component={MedicalReleaseForm} />
          <Route path="confirm-physicians" component={ConfirmPhysicians} />
        </Route>
      </Route>
    </Router>
  </Provider>
, document.querySelector('#root'));

