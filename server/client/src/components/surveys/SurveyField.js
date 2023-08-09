// SurveyField contains logic to render a single label and text input
import React, { Component } from 'react';

export default ({ input }) => {
    console.log(input)

    return (
        <div>
            SurveyField
            <input {...input} />
        </div>
    );
};
