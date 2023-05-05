import NewsList from '@/components/NewsForm/NewsList';
import { NewsContent, NewsWrapper } from './NewsStyled';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function News() {
  useDocumentTitle('모든 여행 기사');
  return (
    <>
      <NewsWrapper>
        <h2>글로벌 뉴스</h2>
        <NewsContent>전세계 핵심 이슈 한눈에 알아보기</NewsContent>
        <NewsList />
      </NewsWrapper>
    </>
  );
}
