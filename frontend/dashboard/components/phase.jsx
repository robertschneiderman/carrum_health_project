import React, {Component} from 'react';
import * as actions from '../actions';

class Phase extends Component {
    constructor(props) {
        super(props);
    }

    renderBar() {
        let { phase, middle } = this.props;
        let arr = [];
        if (middle) arr.push(
            <div className="bar--line"></div>
        );
        arr.push(
            <div className="bar--circle"></div>,
            <div className="bar--line"></div>
        );
        return arr;
    }

                // <div className="pi--bar">
                //     {this.renderBar()}
                // </div>
    render() {

        let { name } = this.props.phase;
        return(
            <div className="phase">
                <p className="phase--name">{name}</p>
                <ul className="phase--list list-phase">
                    <li className="item-phase"></li>
                </ul>
            </div>
        );
    }
}

export default Phase;