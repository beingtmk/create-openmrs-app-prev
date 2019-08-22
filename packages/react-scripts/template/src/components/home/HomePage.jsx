import React from 'react';
import { HomePage as ReactComponentsHomePage } from '@openmrs/react-components';
import homeImage from "../../assets/images/openmrs-community.jpg";
import ComponentContainer from '../demo/ComponentContainer';

// Parameters for ReactComponentsLoginPage
// # 1. homeImage - An image to be displayed in the background of the Home.

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
      <ReactComponentsHomePage
      homeImage={homeImage}
      />
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Home Page Component"
        />
    );
  }

export default DemoContainer;
