import React from 'react';
import { connect } from "react-redux";
import { PatientSearch } from '@openmrs/react-components';
import { push } from 'connected-react-router';
import IdentifierFilters from '../screening/IdentifierFilters';
import utils from '../../utils';
import screeningActions from '../screening/actions/actions';
import ComponentContainer from '../demo/ComponentContainer';


let SearchPatient = (props) => {

  // we "cache" the search results only if we get here via a "PUSH" action, which seems to be only when clicking a BACK
  // bit of a hack, we should explore further

  return (
    <div>
      <PatientSearch
        AdditionalFilters={IdentifierFilters}
        cacheSearchResults={props.action === 'PUSH'}
        getPatientIdentifiers={utils.getPatientIdentifiers}
        rowSelectedActionCreators={[
          () => push('/screening'),
          () => screeningActions.setLastScreeningQueue(props.location),
        ]}
        title="Search for Patient"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.router.location.pathname,
    action: state.router.action
  };
};

const SearchPatientContainer = connect(mapStateToProps)(SearchPatient);

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
      <SearchPatientContainer />
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Patient Search Component"
        />
    );
  }

export default DemoContainer;
