import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { LoadingSpinner } from '@/styles/LoadingStyled';
import loadingImg from '/public/assets/loading.svg';
import { NewsListBlock, NewsNoContent } from './NewsFormStyled';

import newsData from '@/news.json';

export default function NewsList() {
  const [articles, setArticles] = useState(newsData);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [displayedArticles, setDisplayedArticles] = useState([]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (articles) {
      const startIndex = (page - 1) * 10;
      const endIndex = startIndex + 10;
      setDisplayedArticles((prevArticles) => [
        ...prevArticles,
        ...articles.slice(startIndex, endIndex),
      ]);
    }
  }, [articles, page]);

  return (
    <NewsListBlock onScroll={handleScroll}>
      {displayedArticles?.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
      {loading && <LoadingSpinner src={loadingImg} alt="로딩 중" />}
      {!loading && articles === null && (
        <NewsNoContent>기사가 들어오지 않았습니다.🥲</NewsNoContent>
      )}
    </NewsListBlock>
  );
}
