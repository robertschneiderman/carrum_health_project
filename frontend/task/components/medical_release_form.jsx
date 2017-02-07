import React, {Component} from 'react';
// import * as actions from '../actions';

class MedicalReleaseForm extends Component {
    constructor(props) {
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleForwardClick = this.handleForwardClick.bind(this);
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

    render() {
        return(
            <div className="medical-release-form">
                <p className="text-large">Who is your Primary Care Physician (PCP)</p>
                <form className="form">
                    <div className="fieldset">
                        <field className="field">
                            <label className="label" htmlFor="">Name</label>
                            <input className="input" type="text"/>
                        </field>
                    </div>

                    <div className="fieldset">
                        <field className="field">
                            <label className="label" htmlFor="">Phone Number</label>
                            <input className="input" type="text"/>
                        </field>
                    </div>

                    <div className="fieldset">
                        <field className="field field-half">
                            <label className="label" htmlFor="">Address 1</label>
                            <input className="input" type="text"/>
                        </field>     
                        <field className="field field-half">
                            <label className="label" htmlFor="">Address 2</label>
                            <input className="input" type="text"/>
                        </field>
                    </div>

                    <div className="fieldset">
                        <field className="field field-half">
                            <label className="label" htmlFor="">City</label>
                            <input className="input" type="text"/>
                        </field>     
                        <field className="field field-half">
                            <label className="label" htmlFor="">State</label>
                            <input className="input" type="text"/>
                        </field>
                        <field className="field field-half">
                            <label className="label" htmlFor="">Zip</label>
                            <input className="input" type="text"/>
                        </field>                        
                    </div>

                    <div className="fieldset">
                        <field className="field">
                            <label className="label" htmlFor="">Most recent visit date</label>
                            <input className="input" type="text"/>
                        </field>
                    </div>                             

                </form>

                <hr className="line line-grey"/>

                <div className="buttons fb jcsp aic">
                    <a className="link-large" onClick={(e) => this.handleBackClick(e)}>&lt; Back</a>
                    <button className="btn btn-primary">Continue</button>
                </div>
            </div>
        );
    }
}

export default MedicalReleaseForm;