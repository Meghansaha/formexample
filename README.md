# Example Form

A quick example of how to create a form with JSON data instead of manually creating a static form.

## Getting Started

1. clone the repository

2. open powershell on windows or terminal on MacOS

3. Change to the directory where you cloned the repo

4. run npm start

## How does it work?

App.js uses a component I created named BasicForm. All of the styles are defined in App.css.

BasicForm.js loads the data from registration.js and iterates over the inputs to create the form input tags.

forms/registration.js defines a constant with the sample data. There are many ways to define a survey, the example is just a starting point. 
