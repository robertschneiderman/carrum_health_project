import React, {Component} from 'react';
import * as actions from '../actions';
import {router, hashHistory} from 'react-router';

class Panels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskId: 1
        };
    }

    handleClick(taskId) {
        hashHistory.push(`task/0`);
    }

    renderTasks() {
        let {phases, activePhase} = this.props;
        if (phases[activePhase].tasks.length === 0) {
            return (
                <div>
                    <p className="text-bold bullet-arrow">No tasks to complete!</p>
                </div>                
            );
        }
        return phases[activePhase].tasks.map(task => {
            return (
                <div>
                    <p className="text-bold bullet-arrow">Complete {task.name}</p>
                    <p className="link" onClick={this.handleClick.bind(this, this.state.taskId)}>Complete</p>
                </div>
            );
                
        });
    }
    
    render() {
        let { activePhase } = this.props;
        return(
            <div className="panels">
                <div className="panel">
                    <div className="panel--head">
                        <h3 className="title">My next steps</h3>
                    </div>

                    <div className="panel--main">
                        {this.renderTasks()}
                    </div>
                </div>            
            
                <div className="panel">
                    <div className="panel--head">
                        <h3 className="title">My Care Concierge</h3>
                    </div>

                    <div className="panel--main">
                        <div className="avatar">
                            <div className="avatar--left">
                                <img src="./static/images/Jenny.png" alt="" className="avatar--img"/>
                            </div>
                            <div className="avatar--right">
                                <p className="text-regular">Currently assisting you with:</p>
                                <p className="text-bold bullet-triangle">Awaiting your action</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panels;