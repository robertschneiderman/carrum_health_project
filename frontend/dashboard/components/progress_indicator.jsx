import React, {Component} from 'react';
import ProgressIndicatorSkeleton from './progress_indicator_skeleton';
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
var ProgressBar = require('progressbar.js');
window.Snap = Snap;
import * as actions from '../actions';

class ProgressIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circle: null,
        };
    }

    componentDidMount() {
        let circle = new ProgressBar.Circle('#circle', {
            color: '#187bca',
            duration: 3000,
            strokeWidth: 5,            
            easing: 'easeInOut',           
            text: {
                value: '0'
            }                  
        });
        this.setState({circle});
    }

    componentWillReceiveProps(nextProps) {
        let { activePhase } = this.props;
        if (nextProps.activePhase !== activePhase) {
            document.getElementById('outer-pi-container').style.left = `${31.35 * (activePhase + 1)}%`;
            this.state.circle.set(0);
            this.state.circle.setText('0%');
            // this.state.circle.animate(0); 
        }


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
                <div id="outer-pi-container" className="pi--circle">
                    <div className="circle-bg"></div>
                    <div id="circle"></div>
                </div>
                <ProgressIndicatorSkeleton />
            </div>
        );
    }
}

export default ProgressIndicator;