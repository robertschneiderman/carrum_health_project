import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {renderField} from '../helpers';
import * as actions from '../actions';

class MedicalReleaseForm extends Component {
    constructor(props) {
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleForwardClick = this.handleForwardClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillMount() {
        // let {doctors, type} = this.props;
        // debugger;
        // this.doctor = {};
        // if (doctors[type]) {
        //     this.doctor = doctors[type];
        //     this.props.initialize(this.doctor);
        // }
    }

    handleForwardClick() {
        this.props.changeStage(1);
        this.props.makeProgress(24);        
    }

    handleBackClick(e) {
        e.preventDefault();
        this.props.changeStage(-1);
        this.props.makeProgress(-24);              
    }

    handleFormSubmit({ name, phoneNumber, address1, address2, city, state, zip, mostRecentVisitDate}) {
        // debugger;
        this.props.addDoctor({ type: this.props.type, name, phoneNumber, address1, address2, city, state, zip, mostRecentVisitDate});
        this.props.changeStage(1);
        this.props.makeProgress(24);        
    }

    render() {
        let {handleSubmit, doctors, type} = this.props;

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

export default MedicalReleaseForm;
