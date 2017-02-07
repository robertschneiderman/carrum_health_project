import React, {Component} from 'react';
import {connect} from 'react-redux';
import Prompt from './prompt';
import MedicalReleaseForm from './medical_release_form';
import ConfirmPhysicians from './confirm_physicians';
import * as actions from '../actions';

const components = {
  "prompt": Prompt,
  "medical-release-form": MedicalReleaseForm,
  "confirm-physicians": ConfirmPhysicians
};

class Task extends Component {
    constructor(props) {
        super(props);
    }

    renderStages() {
        let { stages, activeStage } = this.props;
            debugger;
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
        activeStage: task.activeStage
    };
};

const mapDispatchToProps = dispatch => ({
    makeProgress: payload => dispatch(actions.makeProgress(payload)),
    nextPhase: payload => dispatch(actions.nextPhase(payload)),
    changeStage: payload => dispatch(actions.changeStage(payload)),
});
    // Task: payload => dispatch(Task(payload))

export default connect(mapStateToProps, mapDispatchToProps)(Task);


// WEBPACK FOOTER //
// frontend/task/components/index.jsx