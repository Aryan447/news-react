import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import loadingIcon from './images/loadingIcon.gif';
import './App.css';

const App = () => {
  const [newsList, setNewsList] = useState([]);
  const [category, setCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://inshorts.deta.dev/news?category=${category}`);
        const data = await response.json();
        setNewsList(data.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Navbar onCategoryChange={handleCategoryChange} />
      <h1>NEWS AT A GLANCE</h1>
      {isLoading ? (
        <img className='loadingIcon' src={loadingIcon} alt="Loading" />
      ) : (
        newsList && newsList.map((news) => (
          <NewsCard id={news.id} imageUrl={news.imageUrl} content={news.content} url={news.url}/>
        ))
      )}
    </>
  );
};

export default App;
