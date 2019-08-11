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

```
cd <Path_TO_THIS_REPOSITORY>
yarn
```

Make the changes you want to make then run,

```
yarn create-react-app test-app
```

This command builds a local copy of create-react-app, integrating your changes, then uses it to create a test-app project.

If all goes well, you can now explore the resulting test-app folder and try running the project locally:

```
cd test-app
yarn start
```


#### Associated files

This Repository differs from that of the CRA in terms of react-scripts.

Browse to packages/react-scripts in your editor. You’ll see a few key files and folders inside.

```
config – contains configuration for Jest, webpack builds and dev server

scripts – the scripts available for running in a create-react-app project, such as yarn start and yarn build

template – the files you actually see when you’ve run 

create-react-app – the base of every new project
```

**Note:** The file gitignore instead of .gitignore – this is to avoid ignoring files from the template itself, but will be automatically renamed when generating a project
package.json – describes this package and its dependencies


#### Publish to npm package

When you’re happy with your changes, you just need to publish them to npm. This makes them publicly available and ready for consumption by anybody using create-react-app.

Navigate back to the packages/react-scripts directory.

**Note:** you’ll also need to increment the version number.

```
npm publish
```