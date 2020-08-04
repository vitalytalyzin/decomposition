import React from 'react';
import './App.css';
import NewsTabs from './components/NewsTabs/NewsTabs';
import { newsTabs, news, searchTabs } from './mock/mock';
import NewsList from './components/NewsList/NewsList';
import NewsItem from './components/NewsItem/NewsItem';
import SearchSection from './components/SearchSection/SearchSection';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <NewsTabs titles={newsTabs} />
      <NewsList news={news}>
        {items => items.map((item, idx) => (
          <NewsItem key={idx} {...item} />
        ))}
      </NewsList>
      <SearchSection searchTabs={searchTabs} />
      <Banner text="Текст рекламы которая нас озолотит" />
    </div>
  );
}

export default App;
