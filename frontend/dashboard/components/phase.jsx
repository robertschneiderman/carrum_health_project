import React, {Component} from 'react';
import * as actions from '../actions';

class Phase extends Component {
    constructor(props) {
        super(props);
        this.renderHiddenContent = this.renderHiddenContent.bind(this);
    }

    renderHiddenContent() {
        return (
            <ul className="phase--list list-phase">
                <li className="item-phase"><strong>Currently Performing:</strong> Medical Records Collection</li>
            </ul>
        );
    }

    render() {

        let { name, active } = this.props.phase;
        let className = active ? 'phase active' : 'phase';
        return(
            <div className={className}>
                <p className="phase--name">{name}</p>
                {active ? this.renderHiddenContent() : ''}
            </div>
        );
    }
}

export default Phase;