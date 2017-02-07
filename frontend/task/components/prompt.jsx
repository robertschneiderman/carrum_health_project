import React, {Component} from 'react';
// import * as actions from '../actions';

class Prompt extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.changeStage(1);
    }

    render() {
        return(
            <div className="prompt">
                <p className="description">
                    As a patient you have the right to inspect or obtain a copy of your health information with limited exceptions.<br /><br /> We need to collect soem information and prepare an Meidcal Record Release Form that will allow Carrum Health to obtain a copy of your relevant medical records from your existing physicians. The records will then be shared with your selected surgeon as part of the program evaluation process.
                </p>
                <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Continue</button>
            </div>
        );
    }
}

export default Prompt;