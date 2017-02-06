import React, {Component} from 'react';
import {connect} from 'react-redux';
// import * as actions from '../actions';

class Task extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="task">
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});
    // Task: payload => dispatch(Task(payload))

export default connect(mapStateToProps, mapDispatchToProps)(Task);