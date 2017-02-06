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
    }

    renderPhases() {
        let { phases } = this.props;
        return phases.map((phase, i) => {
            return (<Phase phase={phase} key={`phase-${i}`} />);
        });
    }

    handleClick() {
        this.props.makeProgress(10);
    }

    render() {

        return(
            <div className="db">
                <button id="temp" onClick={this.handleClick}>Update Props</button>
                <ProgressIndicator {...this.props} />
                <div className="container phases">
                    {this.renderPhases()}
                </div>
                <Panels />
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
    makeProgress: payload => dispatch(actions.makeProgress(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);