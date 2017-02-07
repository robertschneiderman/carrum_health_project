import React from 'react';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <label className="label">{label}</label>
            <input className="input" {...input} type={type} />
            {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
        );
    };

export const validate = values => {
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