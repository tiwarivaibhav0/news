import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import './App.css';

const News = () => {
  const isCookieEnabled = navigator.cookieEnabled;

  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&page=${currentPage}&context=embed`
      );
      const data = await response.json();
      setNewsData(data);
      setTotalPages(response.headers.get('x-wp-totalpages'));
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    isCookieEnabled ? (
<div className="news-container">
      {isLoading ? (
        <div className="skeleton">
          <div className="skeleton-item"></div>
          <div className="skeleton-item"></div>
          <div className="skeleton-item"></div>
          <div className="skeleton-item"></div>
          <div className="skeleton-item"></div>
          <div className="skeleton-item"></div>
        </div>
      ) : (
        <>
          {newsData.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
          <div className="pagination">
            <button onClick={handlePrevClick} disabled={currentPage === 1}>
              Prev
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button onClick={handleNextClick} disabled={currentPage >= totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>    ) : (
      <p>Cookies are disabled</p>
    )
    
  );
};

export default News;
