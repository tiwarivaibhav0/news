import React from 'react';

const NewsItem = ({ item }) => {
  return (
    <div className="news-item">
      <h2>{item.title.rendered}</h2>
      <p>{item.excerpt.rendered}</p>
      <img src={item.jetpack_featured_media_url} alt={item.title.rendered} />
      <a href={item.link}>Read more</a>
    </div>
  );
};

export default NewsItem;
