import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import { LoadingSpinner } from '@/styles/LoadingStyled';
import loadingImg from '/public/assets/loading.svg';
import { NewsListBlock } from './NewsFormStyled';

export default function NewsList() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    console.log('스크롤 이벤트 발생');
    console.log(clientHeight);
    console.log(scrollTop);
    console.log(scrollHeight);

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      console.log('페이지 끝에 스크롤이 닿았음');
      setPage((prev) => prev + 1);
    }
  };

  const getRandomImageThenSet = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&page=${page}`
      );
      setArticles(response.data.articles);
    } catch {
      console.error('fetching error');
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log('page ? ', page);
    getRandomImageThenSet();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 대기 중일 때
  if (loading) {
    return (
      <NewsListBlock>
        <LoadingSpinner src={loadingImg} alt="로딩 중" />
      </NewsListBlock>
    );
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  return (
    <>
      <NewsListBlock>
        {articles?.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    </>
  );
}
