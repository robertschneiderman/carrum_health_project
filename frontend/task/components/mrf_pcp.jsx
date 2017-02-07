import React, {Component} from 'react';
import MedicalReleaseForm from './medical_release_form';
// import * as actions from '../actions';

class PCPForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <MedicalReleaseForm type={'Primary Care Physician'} {...this.props} />
        );
    }
}

export default PCPForm;