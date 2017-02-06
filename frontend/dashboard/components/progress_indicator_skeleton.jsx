import React, {Component} from 'react';
import * as actions from '../actions';

class ProgressIndicatorSkeleton extends Component {
    constructor(props) {
        super(props);
        this.renderSkeleton = this.renderSkeleton.bind(this);
    }

    renderSkeleton() {
        let { activePhase } = this.props;
        if (activePhase === 0) {
        } else {
            return <svg xmlns="http://www.w3.org/2000/svg" className="pi--skeleton" viewBox="0 0 1444.1 85"><path fill="#FFF" stroke="#000" stroke-miterlimit="10" d="M1401.6.5c-15.4 0-28.8 8.2-36.1 20.5H984.7C977.4 8.7 964 .5 948.6.5c-15.4 0-28.8 8.2-36.1 20.5H531.6C524.3 8.7 510.9.5 495.5.5c-15.4 0-28.8 8.2-36.1 20.5H78.6C71.3 8.7 57.9.5 42.5.5 19.3.5.5 19.3.5 42.5s18.8 42 42 42c16.1 0 30-9 37.1-22.3h378.9c7.1 13.3 21 22.3 37.1 22.3s30-9 37.1-22.3h378.9c7.1 13.3 21 22.3 37.1 22.3s30-9 37.1-22.3h378.9c7.1 13.3 21 22.3 37.1 22.3 23.2 0 42-18.8 42-42-.2-23.2-19-42-42.2-42z"/></svg>;            
            // return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1444.1 85"><defs><path id="a" d="M1401.6.5c-15.4 0-28.8 8.2-36.1 20.5H984.7C977.4 8.7 964 .5 948.6.5c-15.4 0-28.8 8.2-36.1 20.5H531.6C524.3 8.7 510.9.5 495.5.5c-15.4 0-28.8 8.2-36.1 20.5H78.6C71.3 8.7 57.9.5 42.5.5 19.3.5.5 19.3.5 42.5s18.8 42 42 42c16.1 0 30-9 37.1-22.3h378.9c7.1 13.3 21 22.3 37.1 22.3s30-9 37.1-22.3h378.9c7.1 13.3 21 22.3 37.1 22.3s30-9 37.1-22.3h378.9c7.1 13.3 21 22.3 37.1 22.3 23.2 0 42-18.8 42-42-.2-23.2-19-42-42.2-42z"/></defs><clipPath id="b"><use overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#5DA8DD" d="M.5.5h531.6v84H.5z"/></svg>;            
        }
    }

    render() {
        return(
            <div className="pi--skeleton">
                {this.renderSkeleton()}
            </div>
        );
    }
}

export default ProgressIndicatorSkeleton;