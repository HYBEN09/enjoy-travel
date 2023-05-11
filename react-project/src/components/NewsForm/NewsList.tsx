import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import { LoadingSpinner } from '@/styles/LoadingStyled';
import loadingImg from '/public/assets/loading.svg';
import { NewsListBlock } from './NewsFormStyled';

export default function NewsList() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const getRandomImageThenSet = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}&page=${page}`
      );
      setArticles(response.data.articles);
    } catch {
      console.error('fetching error');
    }
    setLoading(false);
  };

  useEffect(() => {
    getRandomImageThenSet();
  }, [page]);

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
    </NewsListBlock>
  );
}
