import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

phases: [
    {
        phase: 1,
        name: 'Program Qualification',
        completion: 0,
        active: true,
        tasks: [
            {
                name: 'medical records release form'
            }
        ]
    },{
        phase: 2,
        name: 'Pre-Admission Preparation',
        completion: 0,
        active: false,
        tasks: []
    },{
        phase: 3,
        name: 'Hospital Stay',
        completion: 0,
        active: false,
        tasks: []
    },{
        phase: 4,
        name: 'Post-Discharge Activities',
        completion: 0,
        active: false,
        tasks: []
    }     

];

let defaultState = {
    phases: [
        {

        }
    ]
};

const dashboardReducer = (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case 'UPDATE_NAME':
            return newState;
        default:
            return state;
    }
};

export default dashboardReducer;