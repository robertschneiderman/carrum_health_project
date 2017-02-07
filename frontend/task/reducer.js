import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = {
    activeStage: 0,
};

const taskReducer = (state = defaultState, action) => {
    let newState = merge({}, state);
    switch (action.type) {
        case 'CHANGE_STAGE':
            newState.activeStage += action.payload;
            return newState;           
        default:
            return state;
    }
};

export default taskReducer;