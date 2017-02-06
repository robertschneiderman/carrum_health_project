import React, {Component} from 'react';
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
var ProgressBar = require('progressbar.js');
window.Snap = Snap;
import * as actions from '../actions';

class ProgressIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {circle: null};
    }

    componentDidMount() {
        let circle = new ProgressBar.Circle('#circle', {
            color: '#FCB03C',
            duration: 3000,
            easing: 'easeInOut',
            text: {
                value: '0'
            }                  
        });
        this.setState({circle});      
    }

    componentWillReceiveProps(nextProps) {
        let completion = nextProps.phases[nextProps.activePhase].completion / 100;
        let returnedCircle;
        this.state.circle.animate(completion, {
            duration: 800, 
            step: function(state, circle, attachment) {
                circle.setText(Math.floor(circle.value() * 100));
                returnedCircle = circle;
            }
        });
        this.setState({circle: returnedCircle});
    }


    renderBar() {
        debugger;
        return this.props.phases.map((phase, i) => {
            let middle = true;
            if (i === 0 || i === phase.length-1) middle = false;             
            return (
                <div className="bar">
                    {(middle) ? <div className="bar--line"></div> : ''}
                    <div className="bar--circle"></div>
                    <div className="bar--line"></div>            
                </div>
            );
        });
    }

    render() {
                // {this.renderBar()}
                // <p className="pi--text">100%</p>
        return(
            <div className="pi">
                <div id="circle"></div>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024.7 86.9"><g fill="#FFF" stroke="#000" strokeMiterlimit="10"><path d="M78 68.9c-7.8 10.6-20.4 17.5-34.6 17.5C19.7 86.4.5 67.2.5 43.5S19.7.5 43.4.5c14.1 0 26.7 6.8 34.5 17.4M218 69H77.7M77.7 17.9H218"/></g><g fill="#FFF" stroke="#000" strokeMiterlimit="10"><path d="M946.7 68.9c7.8 10.6 20.4 17.5 34.6 17.5 23.7 0 42.9-19.2 42.9-42.9S1005 .5 981.3.5c-14.1 0-26.7 6.8-34.5 17.4M806.7 69h140.4M947.1 17.9H806.7"/></g><g fill="#FFF" stroke="#000" strokeMiterlimit="10"><path d="M387.1 17.9C379.3 7.3 366.7.5 352.6.5c-14.1 0-26.7 6.8-34.5 17.4M318 68.9c7.8 10.6 20.4 17.5 34.6 17.5 14.2 0 26.7-6.9 34.6-17.5M178 69h140.3M387.1 69h140.3M318.3 17.9H178M527.4 17.9H387.1"/></g><g fill="#FFF" stroke="#000" strokeMiterlimit="10"><path d="M666.4 17.9C658.6 7.3 646 .5 631.9.5c-14.1 0-26.7 6.8-34.5 17.4M597.3 68.9c7.8 10.6 20.4 17.5 34.6 17.5 14.2 0 26.7-6.9 34.6-17.5M457.3 69h140.3M666.4 69h140.3M597.6 17.9H457.3M806.7 17.9H666.4"/></g></svg>
            </div>
        );
    }
}

export default ProgressIndicator;