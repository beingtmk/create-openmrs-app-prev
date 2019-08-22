import React from 'react';
import { Values } from "redux-form-website-template";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";
import ComponentContainer from '../demo/ComponentContainer';

const OverviewComponent = () => {

    return (
      <div>
        Overview of the Component
      </div>
    );
  }
  
  const CodeComponent = () => {
  
    return (
      <div>
        Code of the Component
      </div>
    );
  }
  
  
  const DemoComponent = () => {
  
    return (
      <div>
        <SimpleForm onSubmit={showResults} />
        <hr/>
        <Values form="simple" />
      </div>
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Antd Widgets"
        />
    );
  }

export default DemoContainer;
