import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

const UserOpinion = () => {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    survey.addNavigationItem({
        id: "sv-nav-clear-page",
        title: "Clear Page",
        action: () => {
            survey.currentPage.questions.forEach((question) => {
                question.value = undefined;
            });
        },
        css: "nav-button",
        innerCss: "sd-btn nav-input"
    });
    return (<Survey model={survey} />);
};

export default UserOpinion;