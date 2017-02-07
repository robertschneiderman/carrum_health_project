import React, {Component} from 'react';

import * as actions from '../actions';

class ProgressIndicatorSkeleton extends Component {
    constructor(props) {
        super(props);
        this.renderSkeleton = this.renderSkeleton.bind(this);
    }

    renderSkeleton() {
        let { activePhase, skeletonClass } = this.props;
        if (activePhase === 0) {
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.8 529.8"><path fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" d="M25 52.1h55v113H25z"/><circle fill="#5DA7DB" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="53.4" r="50.4"/><path fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" d="M25 193.1h55v113H25z"/><circle fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="194.4" r="50.4"/><path fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" d="M25 334.1h55v113H25z"/><circle fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="335.4" r="50.4"/><circle fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="476.4" r="50.4"/></svg>;
        } else {
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.8 529.8"><path fill="#5DA7DB" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" d="M25 52.1h55v113H25z"/><circle fill="#5DA7DB" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="53.4" r="50.4"/><path fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" d="M25 193.1h55v113H25z"/><circle fill="#5DA7DB" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="194.4" r="50.4"/><path fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" d="M25 334.1h55v113H25z"/><circle fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="335.4" r="50.4"/><circle fill="#FFF" stroke="#5DA8DD" strokeWidth="6" strokeMiterlimit="10" cx="53.4" cy="476.4" r="50.4"/></svg>;            
        }
    }

    renderPhases() {
        let { phases } = this.props;
        return phases.map(phase => {
            return <li className="pi--skeleton-mobile--item">{phase.name}</li>;
        });
    }

    render() {
        let { skeletonClass } = this.props;
        // let display = mobile ? 'none' : 'block';
        // let style = {display};
        let className = `pi--skeleton-mobile ${skeletonClass}`;
        return(
            <div className={className}>
                    {this.renderSkeleton()}
                <ul className="pi--skeleton-mobile--list">
                    {this.renderPhases()}
                </ul>            
            </div>
        );
    }
}

export default ProgressIndicatorSkeleton;