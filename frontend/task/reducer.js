import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = {
    activeStage: 0,
    doctors: {}
};

const taskReducer = (state = defaultState, action) => {
    let newState = merge({}, state);
    switch (action.type) {
        case 'CHANGE_STAGE':
            newState.activeStage += action.payload;
            return newState;   
        case 'ADD_DOCTOR':
            newState.doctors[action.payload.type] = action.payload;
            return newState;  
        case 'DELETE_DOCTOR':
            delete newState.doctors[action.payload];
            return newState;                                  
        default:
            return state;
    }
};

export default taskReducer;