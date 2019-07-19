# Create OpenMRS App [![Build Status](https://dev.azure.com/facebook/create-react-app/_apis/build/status/facebook.create-react-app?branchName=master)](https://dev.azure.com/facebook/create-react-app/_build/latest?definitionId=1&branchName=master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/pulls)

Create React apps based ond [openmrs-react-components](https://github.com/openmrs/openmrs-react-components) with no build configuration.

- [Creating an App with Minimal Configuration or an Example App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/facebook/create-react-app/issues/new).

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
