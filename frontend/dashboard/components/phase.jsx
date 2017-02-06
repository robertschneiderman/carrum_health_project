import React, {Component} from 'react';
import * as actions from '../actions';

class Phase extends Component {
    constructor(props) {
        super(props);
        this.renderHiddenContent = this.renderHiddenContent.bind(this);
    }

    renderHiddenContent() {
            // <div className="phase--bottom">
            // </div>             
    }

    render() {

        let { name, active } = this.props.phase;
        let className = active ? 'phase active' : 'phase';
        return(
            <div className={className}>
                <div className="phase--top">
                    <p className="title--phase">{name}</p>
                </div>
            </div>
        );
    }
}

export default Phase;