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
        <p>As you are already logged in, open the below login link in incognito window to see the component.</p>
        <a
            href="/#/login"
          >Login Page Link</a>
      </div>
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Login Component"
        />
    );
  }

export default DemoContainer;
