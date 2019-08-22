import React from 'react';
import { Tabs } from '@openmrs/react-components';
import ComponentContainer from '../demo/ComponentContainer';

const OverviewComponent = () => {
  return <div>Overview of the Component</div>;
};

const CodeComponent = () => {
  return <div>Code of the Component</div>;
};

const DemoComponent = () => {
  return (
    <div>
      <Tabs>
        <div label="PatientIn">
          Welcome, Dear <em>Patient</em>!
        </div>
        <div label="PatientOut">
          Sad to see you <em>Go</em>!
        </div>
      </Tabs>
    </div>
  );
};

const DemoContainer = () => {
  return (
    <ComponentContainer
      OverviewComponent={OverviewComponent}
      CodeComponent={CodeComponent}
      DemoComponent={DemoComponent}
      componentName="Tabs Component"
    />
  );
};

export default DemoContainer;
