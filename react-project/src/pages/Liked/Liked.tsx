/* eslint-disable react/no-children-prop */
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

  const [selectedMeetup, setSelectedMeetup] = useState(null);
  const [likedMeetups, setLikedMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <h2>좋아요 한 후기들 </h2>
      <LikedContent>내가 찜한 후기들 😎</LikedContent>
      {likedMeetups.map((meetup) => (
        <Card
          key={meetup.id}
          imageUrl={meetup.photoURL}
          title={meetup.title}
          children={meetup.description}
          onClick={() => handleCardClick(meetup.title, meetup)}
        />
      ))}
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

export default Liked;
