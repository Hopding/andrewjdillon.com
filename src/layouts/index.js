import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import PROFILE_PIC from '../../img/profile-pic.jpg';
import Navbar from '../components/Navbar';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Andrew Dillon</title>
      <link rel="icon" type="image/png" href={PROFILE_PIC} />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
