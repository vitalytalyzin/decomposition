import React from 'react';
import PropTypes from 'prop-types';

// Компонент одного таба

const Tab = ({ title }) => {
  return (
    <div>{title}</div>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
};

export default Tab;
