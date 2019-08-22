import React from 'react';

import LayoutDemoComponent from '../layout/LayoutDemo';
import HomePageComponent from '../home/HomePage';
import AccordionComponent from '../accordion/Accordion';
import TabbedComponent from '../tabs/TabbedComponent';
import SearchPatientComponent from '../search/SearchPatient';

import LoadingComponent from '../loading';
import AntdWidgetsComponent from '../antdWidgets';
import ErrorsComponent from '../errors';
// import LayoutComponent from '../layout';
import AutocompleteComponent from '../autocomplete';
import UploadComponent from '../upload';
import LoginDemoComponent from '../login/LoginPageDemo';
import HeaderComponent from '../header';

// import WidgetsComponent from '../widgets';
// import ListComponent from '../list';
// import FormComponent from '../form';
// import GridComponent from '../grid/GridComponent';
// import ScreeningList from '../screening/ScreeningList';


const ComponentList = (props) => {

  return (
    <div style={{margin:"1%"}}>

      <h1>OpenMRS React Components</h1>
      <hr />

      {/* HomePage Component */}
      <HomePageComponent />

      {/* Accordion Component */}
      <AccordionComponent />

      {/* Tabs Component */}
      <TabbedComponent />

      {/* Search Patient Component */}
      <SearchPatientComponent />

      {/* Loading Component */}
      <LoadingComponent />

      {/* Errors Component */}
      <ErrorsComponent />

      {/* Antd Widgets Component */}
      <AntdWidgetsComponent />

      {/* Autocomplete Component */}
      <AutocompleteComponent />

      {/* Upload Component */}
      <UploadComponent />

      {/* Login Component */}
      <LoginDemoComponent />

      {/* Layout Component */}
      <LayoutDemoComponent />

      {/* Header Component */}
      <HeaderComponent />
    </div> 
  );

};

export default ComponentList;
