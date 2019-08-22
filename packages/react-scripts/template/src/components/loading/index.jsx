import React from 'react';

import { LoadingView } from '@openmrs/react-components';
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
      <LoadingView />
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Loading Component"
        />
    );
  }

export default DemoContainer;
