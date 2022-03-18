import React from "react";

export const RegistrationForm = {
    "name":"registration",
    "version": "1.0",
    "author":"Shawna Curran",
    "questions": [
        {
            "section":"About You",
            "inputs": [
                {"label":"First Name", "name":"firstName", "page":1, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"Last Name", "name":"lastName", "page":1, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"Nick Name", "name":"nickName", "page":1, "inputType": "text", "optional":"true", "cname":"form-input"},
                {"label":"Street Address", "name":"streetAddress", "page":1, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"City", "name":"city", "page":1, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"State", "name":"stateTerritory", "page":1, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"Zip Code", "name":"zipCode", "page":1, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"Country", "name":"country", "page":1, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"Age", "name":"age", "page":1, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"First Name", "name":"firstName", "page":1, "inputType": "text", "optional":"false", "cname":"form-input"}
            ]
        },
        {
            "section":"Technical Insight",
            "inputs": [
                {"label":"Coding Experience", "name":"codingXp", "page":2, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"Coding Explanation", "name":"codingExplanation", "page":2, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"Passion", "name":"passion", "page":2, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"Curiousity", "name":"curiousity", "page":2, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"App Create", "name":"appCreate", "page":2, "inputType": "text", "optional":"false", "cname":"form-input"},
                {"label":"App Idea", "name":"appIdea", "page":2, "inputType": "text", "optional":"false", "cname":"form-input"}
            ]
        }
    ]
}