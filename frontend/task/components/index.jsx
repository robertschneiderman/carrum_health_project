import React, {Component} from 'react';
import {connect} from 'react-redux';
import Prompt from './prompt';
import MRFPCP from './mrf_pcp';
import MRFOrtho from './mrf_ortho';
import ConfirmPhysicians from './confirm_physicians';
import * as actions from '../actions';

const components = {
  "prompt": Prompt,
  "mrf-pcp": MRFPCP,
  "mrf-ortho": MRFOrtho,
  "confirm-physicians": ConfirmPhysicians
};

class Task extends Component {
    constructor(props) {
        super(props);
    }

    renderStages() {
        let { stages, activeStage } = this.props;
        let stage = stages[activeStage];
        let Name = components[stage];
        return <Name {...this.props} />;
        // return stages.map((stage, i) => {
        //     return <Name {...this.props} key={`stage-${i}`}/>;
        // });
    }

    render() {
        return(
            <div className="task">
                {this.renderStages()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let { dashboard, task } = state;
    let phase = dashboard.phases[dashboard.activePhase];
    let activeTask = phase.tasks[parseInt(ownProps.params.id)];
    let stages = activeTask.stages;
    return {    
        stages,
        activeStage: task.activeStage,
        doctors: task.doctors,
    };
};

const mapDispatchToProps = dispatch => ({
    makeProgress: payload => dispatch(actions.makeProgress(payload)),
    nextPhase: payload => dispatch(actions.nextPhase(payload)),
    changeStage: payload => dispatch(actions.changeStage(payload)),
    addDoctor: payload => dispatch(actions.addDoctor(payload)),
    deleteDoctor: payload => dispatch(actions.deleteDoctor(payload))
});
    // Task: payload => dispatch(Task(payload))

export default connect(mapStateToProps, mapDispatchToProps)(Task);


// WEBPACK FOOTER //
// frontend/task/components/index.jsx