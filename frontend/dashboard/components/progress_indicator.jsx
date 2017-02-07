import React, {Component} from 'react';
import ProgressCircle from './progress_circle';
import ProgressIndicatorSkeleton from './progress_indicator_skeleton';

import * as actions from '../actions';

class ProgressIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circle: null,
        };
    }

    render() {
        let { mobile, activePhase, skeletonClass, circleClass } = this.props;
        return(
            <div className="pi">
                <ProgressCircle circleClass={circleClass} {...this.props} />
                <ProgressIndicatorSkeleton skeletonClass={skeletonClass} activePhase={activePhase} />
            </div>
        );
    }
}

export default ProgressIndicator;