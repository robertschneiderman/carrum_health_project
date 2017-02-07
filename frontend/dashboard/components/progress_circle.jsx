import React, {Component} from 'react';
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
var ProgressBar = require('progressbar.js');
window.Snap = Snap;
import { router, hashHistory} from 'react-router';

// import * as actions from '../actions';

class ProgressCircle extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { target } = this.props;        
        let circle = new ProgressBar.Circle(`#${target}`, {
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
            document.getElementsByClassName('pi--circle-mobile')[0].style.top = `${21.05 * (activePhase + 1)}%`;
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
        let { circleClass, target } = this.props;
        let className= `pi--circle ${circleClass}`;
        return(
            <div id="outer-pi-container" className={className}>
                <div className="circle-bg"></div>
                <div id={target} className="circle-progress"></div>
            </div>
        );
    }
}

export default ProgressCircle;