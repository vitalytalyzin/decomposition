import React from 'react';
import PropTypes, { string } from 'prop-types';
import SearchTabs from './SearchTabs/SearchTabs';
import Logo from '../Logo/Logo';
import SearchPanel from './SearchPanel/SearchPanel';

// Компонент отвечающий за отрисовку секции поиска

const SearchSection = ({ searchTabs }) => {
  return (
    <div className="dflex">
      <div style={{ marginRight: 16 }}>
        <Logo />
      </div>
      <div style={{ flex: 'auto' }}>
        <SearchTabs tabs={searchTabs} />
        <SearchPanel />
      </div>
    </div>
  );
};

SearchSection.propTypes = {
  searchTabs: PropTypes.arrayOf(string),
};

export default SearchSection;
