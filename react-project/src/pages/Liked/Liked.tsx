/* eslint-disable react/no-children-prop */
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { db } from '@/firebase/firestore';
import Card from '@/components/Card/Card';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loading from '/public/assets/loading.svg';
import { LoadingSpinner } from '@/styles/LoadingStyled';
import { collection, getDocs, where, query } from '@firebase/firestore';

function Liked() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [likedMeetups, setLikedMeetups] = useState([]);
  const [selectedMeetup, setSelectedMeetup] = useState(null);

  useEffect(() => {
    const fetchLikedMeetups = async () => {
      try {
        const likedMeetupsQuery = query(
          collection(db, 'meetups'),
          where('liked', '==', true)
        );

        const likedMeetupsSnapshot = await getDocs(likedMeetupsQuery);

        const likedMeetupsData = likedMeetupsSnapshot.docs.map((doc) =>
          doc.data()
        );
        setLikedMeetups(likedMeetupsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching liked meetups: ', error);
      }
    };
    fetchLikedMeetups();
  }, []);

  const handleCardClick = (meetupTitle, meetup) => {
    setSelectedMeetup(meetup);
    navigate(`/community/${meetupTitle}`);
  };

  return (
    <LikedWrapper>
      {isLoading && <LoadingSpinner src={loading} alt="로딩 중" />}
      <h2>좋아요 한 후기들</h2>
      <LikedContent>내가 찜한 후기들 😎</LikedContent>
      {likedMeetups.length > 0 ? (
        likedMeetups.map((meetup) => (
          <Card
            key={uuidv4()}
            imageUrl={meetup.photoURL}
            title={meetup.title}
            children={meetup.description}
            onClick={() => handleCardClick(meetup.title, meetup)}
          />
        ))
      ) : (
        <LikedNoContent>찜한 목록이 없습니다.🤨</LikedNoContent>
      )}
    </LikedWrapper>
  );
}

const LikedWrapper = styled.div`
  padding-left: 3px;
  padding-right: 5px;
  margin: 1rem 0 90px 8px;

  h2 {
    font-size: 30px;
    color: var(--primary);
    margin-top: 1rem;
  }
`;

const LikedContent = styled.p`
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--gray-800);
`;

const LikedNoContent = styled.p`
  font-weight: 600;
  font-size: 32px;
  margin-top: 1rem;
  text-align: center;
  line-height: 500px;
  color: var(--secondary);
`;

export default Liked;
