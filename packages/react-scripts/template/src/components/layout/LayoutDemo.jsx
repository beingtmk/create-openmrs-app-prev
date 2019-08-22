import React from 'react';

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
        <p>To properly view the demo of Layout, click the below link</p>
        <a href="/#/layout" target="_blank">Basic Layout Link</a>
      </div>
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Layout Component"
        />
    );
  }

export default DemoContainer;
