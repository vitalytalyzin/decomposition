import React from 'react';
import PropTypes, { object } from 'prop-types';

// Компонент со списком новостей

const NewsList = ({ news, children }) => {
  return (
    <ul>
      {children(news)}
    </ul>
  );
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(object),
  children: PropTypes.func,
};

export default NewsList;
