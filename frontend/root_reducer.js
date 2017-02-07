import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import dashboard from './dashboard/reducer';
import task from './task/reducer';

const appReducer = combineReducers({
  form,
  dashboard,
  task
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGNOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;