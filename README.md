# create-openmrs-app [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/pulls)

![OpenMRS Logo](https://camo.githubusercontent.com/93680c923c12178e9fa6b523b1bbb644d32f4039/68747470733a2f2f74616c6b2e6f70656e6d72732e6f72672f75706c6f6164732f64656661756c742f6f726967696e616c2f32582f662f663165633537396230333938636230346338306135346335366461323139623234343066653234392e6a7067)


This is a fork repository from [Facebook create-react-app](https://github.com/facebook/create-react-app). It has been customized to generate boilerplate *Openmrs Open Web Apps(OWAs)* with a **single line of command**. Resulting OWA will be using [openmrs-react-components](https://github.com/openmrs/openmrs-react-components) library which includes common web UI components such as headers, footers, buttons, etc.

## How to use:

#### How to create a Openmrs ReactJS OWA
*You do NOT have to clone/download this repository in order to create an openmrs ReactJS app.* Just run the following command anywhere in your computer.

```sh
npx create-react-app test-app --scripts-version openmrs-react-scripts
cd test-app
cp .env.skeleton .env
npm start
```

**Note:** You need to edit .env file by providing your OpenMRS server information. This is necessary that some react components communicate with OpenMRS server to fetch values.

1. REACT_APP_SERVER_ADDRESS=[OpenMRS Server Address Goes Here]
2. REACT_APP_SERVER_CONTEXT_PATH=[OpenMRS Server Context Path Goes Here]

#### OWA with example components

```sh
npx create-react-app test-app --scripts-version openmrs-react-scripts-example
cd test-app
cp .env.skeleton .env
npm start
```

## How to contribute:

#### Setup locally
...

#### Associated files
...

#### Publish to npm package
...
