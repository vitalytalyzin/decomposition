import React from 'react';
import PropTypes from 'prop-types';

// Компонент новость

const NewsItem = ({ icon, link, title }) => {
  return (
    <li className="dflex">
      <div className="icon dflex" style={{ width: 16, height: 16 }}>{icon}</div>
      <a href={link}>{title}</a>
    </li>
  );
};

NewsItem.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

export default NewsItem;
