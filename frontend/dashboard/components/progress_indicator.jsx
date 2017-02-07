import React, {Component} from 'react';
import ProgressIndicatorSkeleton from './progress_indicator_skeleton';
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
var ProgressBar = require('progressbar.js');
window.Snap = Snap;
import { router, hashHistory} from 'react-router';
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
            strokeWidth: 14,
            trailColor: '#afddfd',
            trailWidth: 14,                       
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
            document.getElementById('outer-pi-container').style.left = `${31.05 * (activePhase + 1)}%`;
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
        }, (thing = this.state.circle) => {
            if (thing.value() === 1) {
                hashHistory.goBack();
                this.props.nextPhase(1);
            }
        });
        this.setState({circle: returnedCircle});
    }

    render() {
        let { activePhase } = this.props;        
        return(
            <div className="pi">
                <div id="outer-pi-container" className="pi--circle">
                    <div className="circle-bg"></div>
                    <div id="circle"></div>
                </div>
                <ProgressIndicatorSkeleton activePhase={activePhase} />
            </div>
        );
    }
}

export default ProgressIndicator;