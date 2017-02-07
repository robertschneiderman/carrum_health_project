import React, {Component} from 'react';
// import * as actions from '../actions';

class ConfirmPhysicians extends Component {
    constructor(props) {
        super(props);
    }

    renderForms() {
        this.props.forms(form => {
            
        });
    }

    render() {
        return(
            <div className="confirm-physicians">
                <p className="text-regular">Review the information about physicians you have seen regardign your condition and include additional ones as necessary</p>
                {this.renderForms()}
            </div>
        );
    }
}

export default ConfirmPhysicians;