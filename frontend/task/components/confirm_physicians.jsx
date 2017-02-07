import React, {Component} from 'react';
// import * as actions from '../actions';

class ConfirmPhysicians extends Component {
    constructor(props) {
        super(props);
    }

    renderForms() {
        let { doctors } = this.props;
        debugger;
        return doctors.map(doctor => {
            return (
                <ul className="list-unbulleted">
                    <li className="item-spaced">
                        <h3 className="title">{doctor.type}</h3>
                        <table className="table">
                            <tr className="table--row">
                                <td className="table--column"><span className="style-grey">Name:</span></td>
                                <td className="table--column">{doctor.name}</td>
                                <td className="table--column"><a className="link link-regular">Edit</a></td>
                            </tr>
                            <tr className="table--row">
                                <td className="table--column"><span className="style-grey">Phone:</span></td>
                                <td className="table--column">{doctor.phoneNumber}</td>
                                <td className="table--column"><a className="link link-regular">Delete</a></td>
                            </tr>
                            <tr className="table--row">
                                <td className="table--column"><span className="style-grey">Address:</span></td>
                                <td className="table--column">{doctor.address1}</td>
                            </tr>                                  
                        </table>
                    </li>
                </ul>
            );
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