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
            setIsLoading(true); // Move this inside so it resets when category changes
            try {
                const API_KEY = '5c7c587946a24a8490ffd149a12dc35c';
                const baseURL = 'https://newsapi.org/v2/top-headlines';
                const country = 'us';
                const source = 'bbc-news';

                let url;

                if (category === 'all') {
                    // Use only country (default national news)
                    url = `${baseURL}?country=${country}&apiKey=${API_KEY}`;
                } else if (category === 'bbc') {
                    // Use only source — do NOT include country/category
                    url = `${baseURL}?sources=${source}&apiKey=${API_KEY}`;
                } else {
                    // Normal category-based fetch
                    url = `${baseURL}?country=${country}&category=${category}&apiKey=${API_KEY}`;
                }

                const response = await fetch(url);
                const data = await response.json();

                if (data.status === 'ok') {
                    setNewsList(data.articles);
                } else {
                    console.error('Error from NewsAPI:', data);
                    setNewsList([]);
                }
            } catch (error) {
                console.error(error);
                setNewsList([]);
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
      <h1 className='font-inter items-center text-center pt-3 text-2xl' >NEWS AT A GLANCE</h1>
      {isLoading ? (
        <img className='loadingIcon' src={loadingIcon} alt="Loading" />
      ) : (
        newsList && newsList.map((news) => (
        <NewsCard
                            key={news.url}
                            imageUrl={news.urlToImage} // not news.imageUrl
                            content={news.description} // or news.content
                            url={news.url}
                        />

        ))
      )}
    </>
  );
};

export default App;
