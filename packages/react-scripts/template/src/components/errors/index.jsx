import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Errors } from '@openmrs/react-components';
import ComponentContainer from '../demo/ComponentContainer';

const ErrorsComponent = ({ state, dispatch }) => {
  return (
    <div>
      <button onClick={() => {dispatch({ type: "ERROR", error: {message: `This is a new error!`} });}} >Add Error</button>
      <Errors/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state
});


const ErrorsContainer = connect(mapStateToProps)(ErrorsComponent);

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
      <ErrorsContainer />
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Errors Component"
        />
    );
  }

export default DemoContainer;
