import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img{
            dispaly:block;
            width: 30rem;
            height: 150px;
            object-fit:cover;
        }
    }
    .contents {
        h2 {
            margin : 0;
            a{
                color :black;
            }
        }
    }
    p{
        margin : 0;
        line-height:1.5;
        margin-top: 0.5rem;
        white-space:normal;
        font-size:12px;
    }
}
& + & {
    margin-top:3rem;
}`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  console.log(article);
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbname" />
          </a>
        </div>
      )}
      <div className="contents">
        <h4>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
