import React from 'react';

// Компонент строка поиска c кнопкой

const SearchPanel = () => {
  return (
    <form>
      <label className="dflex">
        <input style={{ width: '100%' }} type="text" placeholder="Что будем искать?" />
        <button style={{ marginLeft: 16 }}>поиск</button>
      </label>
    </form>
  );
};

export default SearchPanel;
