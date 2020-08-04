import React from 'react';
import PropTypes, { string } from 'prop-types';

// Компонент отвечающий за отрисовку табов поиска

const SearchTabs = ({ tabs }) => {
  return (
    <div className="dflex">
      {tabs.map((tab, idx) => (
        <div
          key={idx}
          style={{ marginRight: 16 }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

SearchTabs.propTypes = {
  tabs: PropTypes.arrayOf(string),
};

export default SearchTabs;
