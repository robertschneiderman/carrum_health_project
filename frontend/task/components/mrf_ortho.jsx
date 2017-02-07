import React, {Component} from 'react';
import MedicalReleaseForm from './medical_release_form';
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import {validate} from '../helpers';


class OrthoReleaseForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {doctors, type} = this.props;
        let doctor = {};
        if (doctors[type]) {
            doctor = doctors[type];
            this.props.initialize(doctor);
        }        
        return(
            <MedicalReleaseForm initialValues={doctor} type={'Orthopedic Specialist'} {...this.props} />
        );
    }
}

export default reduxForm({
  form: 'OrthoForm',
  validate,
  destroyOnUnmount: false,
  enableReinitialize: true  
})(OrthoReleaseForm);
