import React from 'react';
import './article.css';

const Article = ({imgUrl, title, date}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt='hello' />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
