import React from 'react';

import { Accordion } from '@openmrs/react-components';
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
        <Accordion title="HIV"> 
          Human Immuno Deficiency Virus
        </Accordion>
        <Accordion title="Polio"> 
          Caused by a Deadly Virus
        </Accordion>
      </div>
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Accordion Component"
        />
    );
  }

export default DemoContainer;
