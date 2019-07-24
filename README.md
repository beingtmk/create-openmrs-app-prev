![OpenMRS Logo](https://camo.githubusercontent.com/93680c923c12178e9fa6b523b1bbb644d32f4039/68747470733a2f2f74616c6b2e6f70656e6d72732e6f72672f75706c6f6164732f64656661756c742f6f726967696e616c2f32582f662f663165633537396230333938636230346338306135346335366461323139623234343066653234392e6a7067)

# Create OpenMRS App [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/pulls)

Create React apps based on [openmrs-react-components](https://github.com/openmrs/openmrs-react-components) with no build configuration.

## Overview

**Note:** You need to have a .env file where you deifne two environment variables
1. REACT_APP_SERVER_ADDRESS=[OpenMRS Server Address Goes Here]
2. REACT_APP_SERVER_CONTEXT_PATH=[OpenMRS Server Context Path Goes Here]

### Running the Example app

```sh
npx create-react-app test-app --scripts-version openmrs-react-scripts-example
cd test-app
cp .env.skeleton .env
npm start
```

### Running the app with Minimal Configuration

```sh
npx create-react-app test-app --scripts-version openmrs-react-scripts
cd test-app
cp .env.skeleton .env
npm start
```
