import React from 'react';
import Tab from './Tab/Tab';
import PropTypes, { object } from 'prop-types';

// Компонент строки с табами

const NewsTabs = ({ titles }) => {
  return (
    <div className="dflex">
      {titles.map((item, idx) => (
        <div key={idx} style={{ marginRight: 16 }}>
          <Tab key={idx} title={item.title} />
        </div>
      ))}
    </div>
  );
};

NewsTabs.propTypes = {
  titles: PropTypes.arrayOf(object),
};

export default NewsTabs;
