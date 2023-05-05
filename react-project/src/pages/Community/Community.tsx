import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { MeetupCard } from '@/components/MeetupCard/MeetupCard';
import { CommunityContent, CommunityWrapper } from './CommunityStyled';

function Community() {
  useDocumentTitle('여행 후기');
  return (
    <>
      <CommunityWrapper>
        <h2>여행후기</h2>
        <CommunityContent>
          여행을 다녀온 사용자분들의 솔직한 여행 이야기
        </CommunityContent>
        <MeetupCard />
      </CommunityWrapper>
    </>
  );
}

export default Community;
