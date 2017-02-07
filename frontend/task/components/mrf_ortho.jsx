import React, {Component} from 'react';
import MedicalReleaseForm from './medical_release_form';

class OrthoReleaseForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <MedicalReleaseForm type={'Orthopedic Specialist'} />
        );
    }
}

export default OrthoReleaseForm;