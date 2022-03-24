import React from "react";

export const RegistrationForm = {
    "name":"registration",
    "version": "1.0",
    "author":"Shawna Curran",
    "questions": [
        {
            "section":"About You",
            "inputs": [
                {"label":"First Name", "name":"firstName", "page":1, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"Last Name", "name":"lastName", "page":1, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"Nick Name", "name":"nickName", "page":1, "inputType": "text", "optional":"true", "inputClass":"form-input", "labelClass":"form-label-optional"},
                {"label":"Street Address", "name":"streetAddress", "page":1, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"City", "name":"city", "page":1, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"State", "name":"stateTerritory", "page":1, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"Zip Code", "name":"zipCode", "page":1, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"Country", "name":"country", "page":1, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"Age", "name":"age", "page":1, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"}
            ]
        },
        {
            "section":"Technical Insight",
            "inputs": [
                {"label":"Select me", "name":"selectme", "page":2, "inputType": "select", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"Coding Experience", "name":"codingXp", "page":2, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"Coding Explanation", "name":"codingExplanation", "page":2, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"Passion", "name":"passion", "page":2, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"Curiousity", "name":"curiousity", "page":2, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"App Create", "name":"appCreate", "page":2, "inputType": "text", "optional":"false", "inputClass":"form-input", "labelClass":"form-label"},
                {"label":"App Idea", "name":"appIdea", "page":2, "inputType": "checkbox", "optional":"false", "inputClass":"form-input-checkbox", "labelClass":"form-label", "checkValues":["one","two","three"]}
            ]
        }
    ]
}