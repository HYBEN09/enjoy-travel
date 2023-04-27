/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { db } from '@/firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { collection, getDocs } from '@firebase/firestore';

function Detail() {
  const [expanded, setExpanded] = useState(false);
  const [selectedMeetup, setSelectedMeetup] = useState(null);

  const { meetupTitle } = useParams();

  useEffect(() => {
    const fetchMeetup = async () => {
      try {
        // Firestore에서 meetups 컬렉션의 데이터 가져오기
        const meetupsSnapshot = await getDocs(collection(db, 'meetups'));
        const meetupsData = meetupsSnapshot.docs.map((doc) => doc.data());

        // meetups 상태 변수에서 해당 타이틀 값과 일치하는 카드 정보를 찾아 selectedMeetup 상태 변수에 저장
        const meetup = meetupsData.find(
          (meetup) => meetup.title === meetupTitle
        );
        setSelectedMeetup(meetup);
        console.log(setSelectedMeetup);
      } catch (error) {
        console.error('Error fetching meetups: ', error);
      }
    };
    fetchMeetup();
  }, [meetupTitle]);

  const handleToggle = () => {
    setExpanded((expanded) => !expanded);
  };
  return (
    <>
      {selectedMeetup && (
        <DetailWrapper>
          {/* 선택한 meetup의 데이터 렌더링 */}
          <DetailImageContainer>
            <img src={selectedMeetup.photoURL} alt="" />
          </DetailImageContainer>
          <DetailContainer>
            <span>{selectedMeetup.when}</span>
            <TitleContainer>
              <h2>{selectedMeetup.title}</h2>
              <div>
                <button>
                  <FiHeart />
                </button>
              </div>
            </TitleContainer>
            <DetailTextContainer>
              <p>
                {expanded
                  ? selectedMeetup.description
                  : selectedMeetup.description.slice(0, 200) + '...'}
              </p>
              {selectedMeetup.description.length > 200 && (
                <RedeMoreButton onClick={handleToggle}>
                  {expanded ? 'Read Less' : 'Read More '}
                </RedeMoreButton>
              )}
            </DetailTextContainer>
          </DetailContainer>
        </DetailWrapper>
      )}

      <Button>
        <Link to="/community">커뮤니티로 돌아가기</Link>
      </Button>
      <Footer />
    </>
  );
}

const DetailWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;

  div {
    display: block;
    right: 0;
  }
`;

const DetailImageContainer = styled.div`
  margin-top: 1rem;
  img {
    width: 100%;
    height: 400px;
    max-width: 100%;
  }
`;

const DetailContainer = styled.div`
  margin-top: 1.2rem;

  span {
    font-weight: 600;
  }

  h2 {
    margin-top: 10px;
    font-size: 28px;
  }
`;

const DetailTextContainer = styled.div`
  margin-top: 1.2rem;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: var(--primary);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 24px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 90px;

  IoChevronForwardOutline {
    color: green;
  }

  &:hover,
  &:active {
    background-color: var(--blue-700);
  }

  &:focus-visible {
    outline: 3px solid var(--blue-900);
  }
`;

const RedeMoreButton = styled.button`
  margin-left: 8px;
  color: var(--accent);
`;

export default Detail;
