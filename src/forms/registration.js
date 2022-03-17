import React from "react";

export const RegistrationForm = {
    "name":"registration",
    "version": "1.0",
    "author":"Shawna Curran",
    "questions": [
        {
            "section":"About You",
            "inputs": [
                {"label":"First Name", "name":"firstName", "page":1, "inputType": "text", "optional":"false"},
                {"label":"Last Name", "name":"lastName", "page":1, "inputType": "text", "optional":"false"},
                {"label":"Nick Name", "name":"nickName", "page":1, "inputType": "text", "optional":"false"},
                {"label":"Street Address", "name":"streetAddress", "page":1, "inputType": "text", "optional":"false"},
                {"label":"City", "name":"city", "page":1, "inputType": "text", "optional":"false"},
                {"label":"State", "name":"stateTerritory", "page":1, "inputType": "text", "optional":"false"},
                {"label":"Zip Code", "name":"zipCode", "page":1, "inputType": "text", "optional":"false"},
                {"label":"Country", "name":"country", "page":1, "inputType": "text", "optional":"false"},
                {"label":"Age", "name":"age", "page":1, "inputType": "text", "optional":"false"},
                {"label":"First Name", "name":"firstName", "page":1, "inputType": "text", "optional":"false"}
            ]
        },
        {
            "section":"Technical Insight",
            "inputs": [
                {"label":"Coding Experience", "name":"codingXp", "page":2, "inputType": "text", "optional":"false"},
                {"label":"Coding Explanation", "name":"codingExplanation", "page":2, "inputType": "text", "optional":"false"},
                {"label":"Passion", "name":"passion", "page":2, "inputType": "text", "optional":"false"},
                {"label":"Curiousity", "name":"curiousity", "page":2, "inputType": "text", "optional":"false"},
                {"label":"App Create", "name":"appCreate", "page":2, "inputType": "text", "optional":"false"},
                {"label":"App Idea", "name":"appIdea", "page":2, "inputType": "text", "optional":"false"}
            ]
        }
    ]
}