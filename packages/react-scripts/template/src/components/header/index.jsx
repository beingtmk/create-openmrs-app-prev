import React from 'react';

import { HeaderAlt } from '@openmrs/react-components';
import ComponentContainer from '../demo/ComponentContainer';

import logo from '../../assets/images/openmrs.logo';
import potraitLogo from '../../assets/images/openmrs-logo.svg';
import { NAV_MENU_PAGES, USER_MENU_PAGES } from '../../constants';


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
        <HeaderAlt
        className="HeaderAlt"
        logo={potraitLogo}
        smallWidthLogo={logo}
        navMenuPages={NAV_MENU_PAGES}
        userMenuPages={USER_MENU_PAGES}
        />
      </div>
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Header Component"
        />
    );
  }

export default DemoContainer;
