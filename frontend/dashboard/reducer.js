import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let phases = [
    {
        number: 1,
        name: 'Program Qualification',
        completion: 0,
        tasks: [
            {
                name: 'medical records release form',
                stages: [
                    'prompt',
                    'mrf-pcp',
                    'mrf-ortho',
                    'confirm-physicians'
                ]
            }
        ]
    },{
        number: 2,
        name: 'Pre-Admission Preparation',
        completion: 0,
        tasks: []
    },{
        number: 3,
        name: 'Hospital Stay',
        completion: 0,
        tasks: []
    },{
        number: 4,
        name: 'Post-Discharge Activities',
        completion: 0,
        tasks: []
    }     

];

let defaultState = {
    activePhase: 0,
    phases
};

const dashboardReducer = (state = defaultState, action) => {
    let newState = merge({}, state);
    switch (action.type) {
        case 'MAKE_PROGRESS':
            newState.phases[newState.activePhase].completion += action.payload;
            return newState;
        case 'NEXT_PHASE':
            newState.activePhase += action.payload;
            return newState;            
        default:
            return state;
    }
};

export default dashboardReducer;