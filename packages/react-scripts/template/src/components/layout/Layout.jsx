import React from 'react';
import { connect } from 'react-redux';
import { 
  BasicLayout, 
  // SystemAlert 
  } from '@openmrs/react-components';
import potraitLogo from '../../assets/images/openmrs-logo.svg';
import logo from '../../assets/images/openmrs.logo';
import { 
  // NAV_MENU_PAGES, 
  USER_MENU_PAGES 
  } from '../../constants';
import Footer from '../footer/Footer';
// import PatientAlert from '../patient/PatientAlert';
import utils from '../../utils';

const Layout = (props) => {
  return (
    <div>
      <BasicLayout
        // PatientAlert={PatientAlert}
        // SystemAlert={SystemAlert}
        // backLink={props.lastScreeningQueue}
        identifiersToDisplay={utils.getIdentifiersToDisplay}
        logo={potraitLogo}
        navMenuPages={[]}
        // patientHeaderBacklink="/screening"
        smallWidthLogo={logo}
        userMenuPages={USER_MENU_PAGES}
        {...props}
      />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lastScreeningQueue: state.screening.LAST_SCREENING_QUEUE
  };
};

export default connect(mapStateToProps)(Layout);

