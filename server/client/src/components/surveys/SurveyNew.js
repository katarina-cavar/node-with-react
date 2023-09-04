// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {showFormReview: false};
    // }

    // short form of the above constructor
    state = { showFormReview: false};

    renderContent()  {
        if (this.state.showFormReview) {
            return <SurveyFormReview />;
        }

        return <SurveyForm
            onSurveySubmit={() => this.setState({ showFormReview: true })}
        />;
    }

    render() {
        return (
            <div>
                SurveyNew!
                {this.renderContent()}
            </div>
        );
    }
}

export default SurveyNew;
