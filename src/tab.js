import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ title, onClick }) => {
  return (
    <a href='#' onClick={onClick}>{title}</a>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
};
