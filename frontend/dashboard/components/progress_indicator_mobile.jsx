import React, {Component} from 'react';
import ProgressCircle from './progress_circle';
import ProgressIndicatorMobileSkeleton from './progress_indicator_mobile_skeleton';

import * as actions from '../actions';

class ProgressIndicatorMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circle: null,
        };
    }

    render() {
        let { mobile, activePhase, skeletonClass, circleClass } = this.props;
        return(
            <div className="pi--mobile">
                <ProgressCircle circleClass={circleClass} {...this.props} />
                <ProgressIndicatorMobileSkeleton {...this.props} skeletonClass={skeletonClass} activePhase={activePhase} />
            </div>
        );
    }
}

export default ProgressIndicatorMobile;