import React, {Component} from 'react';
import MedicalReleaseForm from './medical_release_form';
// import * as actions from '../actions';
import {validate} from '../helpers';
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux';

class PCPForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {doctors, type} = this.props;
        let doctor = {};
        if (doctors["Primary Care Physician"]) {
            doctor = doctors["Primary Care Physician"];
            this.props.initialize(doctor);
        debugger;     
        }      
        return(
            <MedicalReleaseForm initialValues={doctor} type={'Primary Care Physician'} {...this.props} />
        );
    }
}

export default reduxForm({
  form: 'PCPForm',
  validate,

  keepDirtyOnReinitialize: true,
  destroyOnUnmount: false,
  enableReinitialize: true  
})(PCPForm);