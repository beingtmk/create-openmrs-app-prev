# Create OpenMRS App [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/pulls)

Create React apps based ond [openmrs-react-components](https://github.com/openmrs/openmrs-react-components) with no build configuration.

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
