import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgressIndicator from './progress_indicator';
import Panels from './panels';
import * as actions from '../actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    renderPhases() {

    }

    render() {
        return(
            <div className="db">
                <div className="phases">
                    <Phase />
                    <Phase />
                    <Phase />
                    <Phase />
                </div>
                <Panels />
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { phases } = state;
    return {
        phases
    };
};

const mapDispatchToProps = dispatch => ({
    // Dashboard: payload => dispatch(Dashboard(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);