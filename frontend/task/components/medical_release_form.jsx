import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <label className="label">{label}</label>
            <input className="input" {...input} type={type}/>
            {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
        );
    };

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 3) {
        errors.name = 'Must be at least 3 characters';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Required';
    } else if (values.phoneNumber.length !== 10) {
        errors.phoneNumber = 'Must be 10 numbers';
    }    

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be at least 6 characters';
    }

    if (!values.address1) {
        errors.address1 = 'Required';
    } 

    if (!values.city) {
        errors.city = 'Required';
    }

    if (!values.state) {
        errors.state = 'Required';
    } 
    
    if (!values.zip) {
        errors.zip = 'Required';
    } else if (values.zip.length !== 5) {
        errors.phoneNumber = 'Must be 5 numbers';
    }     

    if (!values.mostRecentVisitDate) {
        errors.mostRecentVisitDate = 'Required';
    }                              

    return errors;
};


class MedicalReleaseForm extends Component {
    constructor(props) {
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleForwardClick = this.handleForwardClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleForwardClick() {
        this.props.changeStage(1);
        this.props.makeProgress(24);        
    }

    handleBackClick(e) {
        e.preventDefault();
        this.props.addDoctor();
        this.props.changeStage(-1);
        this.props.makeProgress(-24);              
    }

    handleFormSubmit({ name, phoneNumber, address1, address2, city, state, zip, mostRecentVisitDate}) {
        // debugger;
        this.props.addDoctor({ name, phoneNumber, address1, address2, city, state, zip, mostRecentVisitDate});
        this.props.changeStage(1);
        this.props.makeProgress(24);        
    }


    render() {
        let {handleSubmit} = this.props;
        return(
            <div className="medical-release-form">
                <p className="text-large">Who is your <strong>{this.props.type}</strong>?</p>
                <form className="form">
                    <div className="fieldset">
                        <field className="field">
                            <Field component={renderField} name="name" label="Name" type="text" />
                        </field>
                    </div>

                    <div className="fieldset">
                        <field className="field">
                            <Field component={renderField} name="phoneNumber" label="Phone Number" type="number" />
                        </field>
                    </div>

                    <div className="fieldset">
                        <field className="field field-half">
                            <Field component={renderField} name="address1" label="Address 1" type="text" />
                        </field>     
                        <field className="field field-half">
                            <Field component={renderField} name="address2" label="Address 2" type="text" />
                        </field>
                    </div>

                    <div className="fieldset">
                        <field className="field field-half">
                            <Field component={renderField} name="city" label="City" type="text" />
                        </field>     
                        <field className="field field-half">
                            <Field component={renderField} name="state" label="State" type="text" />
                        </field>
                        <field className="field field-half">
                            <Field component={renderField} name="zip" label="Zip" type="number" />
                        </field>                        
                    </div>

                    <div className="fieldset">
                        <Field component={renderField} name="mostRecentVisitDate" label="Most Recent Visit Date" type="text" />
                    </div>                             

                </form>

                <hr className="line line-grey"/>

                <div className="buttons fb jcsp aic">
                    <a className="link-large" onClick={(e) => this.handleBackClick(e)}>&lt; Back</a>
                    <button className="btn btn-primary" onClick={handleSubmit(this.handleFormSubmit)}>Continue</button>
                </div>
            </div>
        );
    }
}

export default reduxForm({
  form: 'signup',
  validate
})(MedicalReleaseForm);
