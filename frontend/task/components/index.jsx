import React, {Component} from 'react';
import {connect} from 'react-redux';
import Prompt from './prompt';
import MedicalReleaseForm from './medical_release_form';
import ConfirmPhysicians from './confirm_physicians';
// import * as actions from '../actions';

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
        let { stages } = this.props;
        return stages.map((stage, i) => {
            debugger;
            let Name = components[stage];
            return <Name key={`stage-${i}`}/>;
        });
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
    let { dashboard } = state;
    let phase = dashboard.phases[dashboard.activePhase];
    let task = phase.tasks[parseInt(ownProps.params.id)];
    let stages = task.stages;
    return {    
        stages
    };
};

const mapDispatchToProps = dispatch => ({
});
    // Task: payload => dispatch(Task(payload))

export default connect(mapStateToProps, mapDispatchToProps)(Task);


// WEBPACK FOOTER //
// frontend/task/components/index.jsx