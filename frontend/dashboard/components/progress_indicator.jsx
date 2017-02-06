import React, {Component} from 'react';
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
        debugger;
        if (nextProps.activePhase !== this.props.activePhase) {
            document.getElementById('outer-pi-container').style.left = '33.3%';
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
                <div id="outer-pi-container" className="pi--circle">
                    <div id="circle"></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 854.5 85"><path fill="#FFF" stroke="#000" stroke-miterlimit="10" d="M812 .5c-15.4 0-28.8 8.2-36.1 20.5H591.6C584.3 8.7 570.9.5 555.5.5c-15.4 0-28.8 8.2-36.1 20.5H335.1C327.8 8.7 314.3.5 299 .5c-15.4 0-28.8 8.2-36.1 20.5H78.6C71.3 8.7 57.9.5 42.5.5 19.3.5.5 19.3.5 42.5s18.8 42 42 42c16.1 0 30-9 37.1-22.3h182.3c7.1 13.3 21 22.3 37.1 22.3s30-9 37.1-22.3h182.3c7.1 13.3 21 22.3 37.1 22.3s30-9 37.1-22.3h182.3c7.1 13.3 21 22.3 37.1 22.3 23.2 0 42-18.8 42-42s-18.8-42-42-42z"/></svg>            </div>
        );
    }
}

export default ProgressIndicator;