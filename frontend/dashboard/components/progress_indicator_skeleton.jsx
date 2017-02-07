import React, {Component} from 'react';
import * as actions from '../actions';

class ProgressIndicatorSkeleton extends Component {
    constructor(props) {
        super(props);
        this.renderSkeleton = this.renderSkeleton.bind(this);
    }

    renderSkeleton() {
        let { activePhase } = this.props;
        if (activePhase === 0) {
        } else {
            return <svg xmlns="http://www.w3.org/2000/svg" className="pi--skeleton" viewBox="0 0 1465.9 106.8"><path fill="#FFF" stroke="#5DA8DD" strokeWidth="4" strokeMiterlimit="10" d="M1412.5 3c-21 0-38.9 12.8-46.5 31h-360c-7.6-18.2-25.6-31-46.5-31s-39 12.8-46.5 31H553c-7.6-18.2-25.6-31-46.5-31S467.6 15.8 460 34H100C92.3 15.8 74.4 3 53.4 3 25.6 3 3 25.6 3 53.4s22.6 50.4 50.4 50.4c21.6 0 40.1-13.6 47.2-32.8h358.6c7.1 19.1 25.6 32.8 47.2 32.8s40.1-13.6 47.2-32.8h358.6c7.1 19.1 25.6 32.8 47.2 32.8s40.1-13.6 47.2-32.8h358.6c7.1 19.1 25.6 32.8 47.2 32.8 27.8 0 50.4-22.6 50.4-50.4S1440.4 3 1412.5 3z"/></svg>;
        }
    }

    render() {
        return(
            <div className="pi--skeleton">
                {this.renderSkeleton()}
            </div>
        );
    }
}

export default ProgressIndicatorSkeleton;