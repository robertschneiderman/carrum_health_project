import React, {Component} from 'react';

import * as actions from '../actions';

class ProgressIndicatorSkeleton extends Component {
    constructor(props) {
        super(props);
        this.renderSkeleton = this.renderSkeleton.bind(this);
    }

    renderSkeleton() {
        let { activePhase, skeletonClass } = this.props;
        if (activePhase === 0) {
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1465.9 106.8"><path fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" d="M1412.5 3c-21 0-38.9 12.8-46.5 31h-360c-7.6-18.2-25.6-31-46.5-31s-39 12.8-46.5 31H553c-7.6-18.2-25.6-31-46.5-31S467.6 15.8 460 34H84.1v37h375.2c7.1 19.1 25.6 32.8 47.2 32.8s40.1-13.6 47.2-32.8h358.6c7.1 19.1 25.6 32.8 47.2 32.8s40.1-13.6 47.2-32.8h358.6c7.1 19.1 25.6 32.8 47.2 32.8 27.8 0 50.4-22.6 50.4-50.4S1440.4 3 1412.5 3z"/><circle fill="#5DA7DB" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="53.4" r="50.4"/></svg>;
        } else {
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1465.9 106.8"><path fill="#5DA7DB" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" d="M84.1 34h423.7v37H84.1z"/><circle fill="#5DA7DB" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="53.4" r="50.4"/><path fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" d="M1412.5 3c-21 0-38.9 12.8-46.5 31h-360c-7.6-18.2-25.6-31-46.5-31s-39 12.8-46.5 31H537.1v37h375.2c7.1 19.1 25.6 32.8 47.2 32.8s40.1-13.6 47.2-32.8h358.6c7.1 19.1 25.6 32.8 47.2 32.8 27.8 0 50.4-22.6 50.4-50.4S1440.4 3 1412.5 3z"/><circle fill="#5DA7DB" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="506.4" cy="53.4" r="50.4"/></svg>;            
        }
    }

    render() {
        let { skeletonClass } = this.props;
        // let display = mobile ? 'none' : 'block';
        // let style = {display};
        let className = `pi--skeleton ${skeletonClass}`;
        return(
            <div className={className}>
                {this.renderSkeleton()}
            </div>
        );
    }
}

export default ProgressIndicatorSkeleton;