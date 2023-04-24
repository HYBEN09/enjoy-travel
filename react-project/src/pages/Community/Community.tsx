/* eslint-disable react/no-children-prop */
import Card from '@/components/Card/Card';
import { db } from '@/firebase/firestore';
import { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Header } from '@/components/Header/Header';
import { useNavigate } from 'react-router-dom';
function Community() {
  const [meetups, setMeetups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        // Firestore에서 meetups 컬렉션의 데이터 가져오기
        const meetupsSnapshot = await getDocs(collection(db, 'meetups'));
        const meetupsData = meetupsSnapshot.docs.map((doc) => doc.data());
        setMeetups(meetupsData);
      } catch (error) {
        console.error('Error fetching meetups: ', error);
      }
    };
    fetchMeetups();
  }, []);

  const handleCardClick = (meetupId) => {
    navigate(`/community/:${meetupId}`);
  };

  return (
    <>
      <Header />

      <CommunityWrapper>
        <h2>여행후기</h2>
        <CommunityContent>
          여행을 다녀온 사용자분들의 솔직한 여행 이야기
        </CommunityContent>
        {meetups.map((meetup) => (
          <Card
            key={uuidv4()}
            imageUrl={meetup.photoURL}
            title={meetup.title}
            children={meetup.description}
            onClick={() => handleCardClick(meetup.title)}
          />
        ))}
      </CommunityWrapper>
    </>
  );
}

const CommunityWrapper = styled.div`
  padding-left: 8px;
  margin-left: 8px;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1rem;

  h2 {
    font-size: 30px;
    margin: 1rem;
    color: var(--primary);
  }
`;

const CommunityContent = styled.p`
  font-weight: 600;
  margin: 1rem;
  color: var(--gray-800);
`;
export default Community;
