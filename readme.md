# Tim's Weather API Client

This is my attempt at building a client for a weather API to meet Tray's requirements, as listed below. I look forward to receiving feedback on where I can improve and recommendations for further research.

## Getting Started

- run `npm i`
- create a `.env` file and add Base Url and Key for the API
- I've created a `.sample.env` file with the necessary environment variable keys, just add the values

## Technologies

- I've used [Axios](https://axios-http.com/) for requesting information from the weather API. I chose it primarily for its simplicity and straightforward error handling
- I also added dotenv for handling environment variables

## Requirements

All tests are currently passing. A sample output from running `node app.js` looks like this:

<img src="https://i.ibb.co/ZgxT820/Screenshot-2021-03-22-at-16-10-53.png" width="300">

A couple of notes:

### Performance

running `node app.js` reliably executes in under 30 seconds but some of the individual functions sometimes get quite close to the 5 second runtime specified in `./tests/structure.test.js'` so further learning may be needed in this area.

### Averages

In calculating averages I chose to exclude zero values so as to an average of years for which there was available data.

## Thank You

Thank you to Tray for this tech test, I very much enjoyed the challenge and some of the learning it prompted. I look forward to receving any feedback and hope to speak with you soon!


The original task outline was as follows:


# Task
Your task is to create a client for a weather API.
We have already implemented the user interface for this in `app.js`. Your task is to finish implementing the functions that will be calling the api.

You need to implement the 6 functions that are currently stubbed in the `src/index.js` file and then write corresponding tests for them. You should not make any changes to the `app.js`. We value performant applications and would like the execution time of running `node app.js` to be under 30 seconds.

The exported functions must always return a number, if the function would error or not return a number it should return `0`

As this task will be tested automatically, you must not change the name or inputs of the exported functions in the `src/index.js`.

If you want to split the task across multiple javascript files, please add them into the `src` folder.

## FAQ
### Am I allowed to use third party libraries?
Yes, you can use any third party libraries you want.

# API
The api docs are in a separate markdown file called `api.md`.

# Setup
To begin please run: `npm i` to install all packages that are required.

# Running 
You can run `node app.js` to run and test the exported functions in `src/index.js`. 

# Tests
Jest is used to test this task.
To run the tests run: `npm run test`

A tests folder has already been created with a `tests/structure.test.js` file. Please don't modify this test file, it is used to ensure that the exported functions in the `src/index.js` return the correct type.

A failing test has also been created in `tests/getMaxTemperature.test.js`. Getting this to test to pass should be a good starting point.
