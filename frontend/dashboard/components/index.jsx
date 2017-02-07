import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgressIndicator from './progress_indicator';
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

        return(
            <div className="db">
                <button id="temp" onClick={this.handleClick}>Update Props</button>
                <button id="temp2" onClick={this.handleClick2}>Update Props 2</button>
                
                <ProgressIndicator {...this.props} />
                
                <div className="phases-sec">
                    <div className="container phases">
                        {this.renderPhases()}
                    </div>
                    <ul className="phases-result list-phase">
                        <li className="item-phase"><strong>Currently Performing:</strong> Medical Records Collection</li>
                        {this.props.children}
                    </ul>
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