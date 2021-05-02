import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const MetaDecorator = ({ title, description, lang, dir }) => {
  return (
    <Helmet htmlAttributes={{ lang, dir }}>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

MetaDecorator.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  dir: PropTypes.string.isRequired,
};

export default MetaDecorator;
