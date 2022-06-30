# 🧠 See-Mode Front-End Tech Task

👋 Hi and welcome to the See-Mode front-end tech task.

The objective of the task is to create a simple web application that will allow users to interact with a list of findings that will have to be retrieved from a mocked API endpoint.

The application will have to be able to:

- Consume the findings from data.json asynchronously as if you were retrieving it from a real API endpoint.
- Render the list of findings on a HTML canvas.
- Render the list of findings in a table.
- Interact with the findings by hovering over them on either the table or the canvas and highlighting their counterparts on the table/canvas.

The [`./public/data.json`](./public/data.json) file represents the result of an API call and contains two types of findings.

- `"absolute"` findings are positioned absolutely on the canvas (`x`, `y`) where the top left corner of the canvas is `0, 0`.
- `"radial"` findings are positioned relative to the center of the canvas. The `hours` and `minutes` on the finding represent the angle of the radial finding. The `distanceFromCenter` represents the radius of the radial finding in pixels.

We value your time and effort, to help you get started we have set up a simple boilerplate for you. Don't feel obligated to stick to the boilerplate, feel free to create your own or remodel the boilerplate to your liking.

## What do we expect from you?

- Write elegant code
- Write efficient code

## Think about the following

- Does my submission reflect my work?
- Is my solution scalable?
- How can I improve my submission?

## Please make sure to

- Write some form of documentation (e.g. a README.md) and explain the choices that led to your solution.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm install`

Install the projects dependencies. Our boilerplate uses [fabric.js](https://github.com/fabricjs/fabric.js) to simplify the Canvas usage.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
