import React, {Component} from 'react';
import {router, hashHistory} from 'react-router';
// import * as actions from '../actions';

class ConfirmPhysicians extends Component {
    constructor(props) {
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleForwardClick = this.handleForwardClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleForwardClick() {
        hashHistory.push('/');
        this.props.nextPhase(1);
    }

    handleBackClick(e) {
        if (e) e.preventDefault();
        this.props.changeStage(-1);
        this.props.makeProgress(-24);              
    }

    handleEdit(key) {
        if (key === 'Orthopedic Specialist') {
            this.handleBackClick();
        } else {
            this.props.changeStage(-2);
            this.props.makeProgress(-48);             
        }
    }

    handleDelete(key) {
        debugger;
        this.props.deleteDoctor(key);
    }

    renderForms() {
        let { doctors } = this.props;
        let doctorsJSX = [];
        for (let key in doctors) {
            let doctor = doctors[key];
            doctorsJSX.push(
                <ul className="list-unbulleted">
                    <li className="item-spaced">
                        <h3 className="title">{doctor.type}</h3>
                        <table className="table">
                            <tr className="table--row">
                                <td className="table--column"><span className="style-grey">Name:</span></td>
                                <td className="table--column">{doctor.name}</td>
                                <td className="table--column"><a className="link link-regular" onClick={this.handleEdit.bind(this, key)}>Edit</a></td>
                            </tr>
                            <tr className="table--row">
                                <td className="table--column"><span className="style-grey">Phone:</span></td>
                                <td className="table--column">{doctor.phoneNumber}</td>
                                <td className="table--column"><a className="link link-regular" onClick={this.handleDelete.bind(this, key)}>Delete</a></td>
                            </tr>
                            <tr className="table--row">
                                <td className="table--column"><span className="style-grey">Address:</span></td>
                                <td className="table--column">{doctor.address1}</td>
                            </tr>                                  
                        </table>
                    </li>
                </ul>
            );
        }
        return doctorsJSX;
    }

    render() {
        return(
            <div className="confirm-physicians">
                <p className="text-regular">Review the information about physicians you have seen regardign your condition and include additional ones as necessary</p>
                {this.renderForms()}
                <hr className="line line-grey"/>

                <div className="buttons fb jcsp aic">
                    <a className="link-large" onClick={(e) => this.handleBackClick(e)}>&lt; Back</a>
                    <button className="btn btn-primary" onClick={this.handleForwardClick.bind(this)}>Continue</button>
                </div>                
            </div>
        );
    }
}

export default ConfirmPhysicians;