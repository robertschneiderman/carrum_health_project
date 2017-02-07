import React, {Component} from 'react';
// import * as actions from '../actions';

class Prompt extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="prompt">
                <p class="description">
                    As a patient you have the right to inspect or obtain a copy of your health information with limited exceptions.<br /><br /> We need to collect soem information and prepare an Meidcal Record Release Form that will allow Carrum Health to obtain a copy of your relevant medical records from your existing physicians. The records will then be shared with your selected surgeon as part of the program evaluation process.
                </p>
            </div>
        );
    }
}

export default Prompt;