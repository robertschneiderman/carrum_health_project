import React, {Component} from 'react';
import * as actions from '../actions';

class ProgressIndicator extends Component {
    constructor(props) {
        super(props);
    }

    renderBar() {
        let arr = [];
        for (let i = 0; i <= 4; i++) {
            arr.push(
                <div className="bar--circle"></div>,
                <div className="bar--line"></div>
            );
        }
        return arr;
    }

    render() {
        return(
            <div className="phase">
                <div className="pi--bar">
                    {this.renderBar()}
                </div>
                <p className="phase--name"></p>
                <ul className="phase--list">
                    <li className="item-phase"></li>
                </ul>
            </div>
        );
    }
}

export default ProgressIndicator;