import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgressIndicator from './progress_indicator';
import ProgressCircle from './progress_circle';
import Phase from './phase';
import Panels from './panels';
import * as actions from '../actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    renderPhases() {

        let { phases, activePhase } = this.props;
        return phases.map((phase, i) => {
            let active = phase.number === (activePhase+1);
            return (<Phase phase={phase} active={active} key={`phase-${i}`} />);
        });
    }

    handleClick() {
        this.props.makeProgress(20);
    }

    handleClick2() {
        this.props.nextPhase(1);
    }    

    render() {
                        // <ProgressCircle {...this.props} circleClass={'mobile'} />

        return(
            <div className="db">
                <ProgressIndicator target="circle" skeletonClass={''} circleClass={'desktop'} {...this.props} />

                <div className="mobile-flex">            
                    <ProgressCircle target="circle-new" circleClass={'mobile'} {...this.props} />
                    <div className="phases-sec">
                        <div className="container phases">
                            {this.renderPhases()}
                        </div>
                        <ul className="phases-result list-phase">
                            <li className="item-phase"><strong>Currently Performing:</strong> Medical Records Collection</li>
                            {this.props.children}
                        </ul>
                    </div>
                </div>

                <hr className="line" />

                <Panels {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    // debugger;
    let { dashboard } = state;
    return {
        phases: dashboard.phases,
        activePhase: dashboard.activePhase,
    };
};

const mapDispatchToProps = dispatch => ({
    makeProgress: payload => dispatch(actions.makeProgress(payload)),
    nextPhase: payload => dispatch(actions.nextPhase(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);