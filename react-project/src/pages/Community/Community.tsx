/* eslint-disable react/no-children-prop */
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Card from '@/components/Card/Card';
import { db } from '@/firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { collection, getDocs } from '@firebase/firestore';

function Community() {
  const [meetups, setMeetups] = useState([]);
  const [selectedMeetup, setSelectedMeetup] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const meetupsSnapshot = await getDocs(collection(db, 'meetups'));
        const meetupsData = meetupsSnapshot.docs.map((doc) => doc.data());
        setMeetups(meetupsData);
      } catch (error) {
        console.error('Error fetching meetups: ', error);
      }
    };
    fetchMeetups();
  }, []);

  const handleCardClick = (meetupTitle, meetup) => {
    setSelectedMeetup(meetup);
    navigate(`/community/${meetupTitle}`);
  };

  return (
    <>
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
            onClick={() => handleCardClick(meetup.title, meetup)}
          />
        ))}
      </CommunityWrapper>

      <Footer />
    </>
  );
}

const CommunityWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 3px;
  padding-right: 5px;
  margin: 1rem 0 55px 8px;

  @media (min-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  h2 {
    font-size: 30px;
    color: var(--primary);
    margin-top: 1rem;
  }
`;

const CommunityContent = styled.p`
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--gray-800);
`;
export default Community;
