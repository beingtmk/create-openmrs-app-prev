import React from 'react';
import PropTypes from 'prop-types';
import { LoginPage as ReactComponentsLoginPage } from '@openmrs/react-components';
import logo from "../../assets/images/openmrs-logo.svg";
import homeImage from "../../assets/images/openmrs-community.jpg";


// Parameters for ReactComponentsLoginPage
// # 1. homeImage - An image to be displayed in the background of the Login Page.
// # 2. logo - A logo image to be displayed on top of the login form.
// # 3. location - An array of location that should ideally served by the backend.

const LoginPage = props => {
  return (
    <ReactComponentsLoginPage
      homeImage={homeImage}
      location={props.location}
      logo={logo}
    />
  );
};

LoginPage.propTypes = {
  location: PropTypes.object.isRequired,
};


export default LoginPage;


