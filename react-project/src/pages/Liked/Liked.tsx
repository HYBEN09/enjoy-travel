/* eslint-disable react/no-children-prop */
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/firebase/firestore';
import Card from '@/components/Card/Card';
import { useNavigate } from 'react-router-dom';
import loading from '/public/assets/loading.svg';
import { AuthContext } from '@/context/AuthContext';
import { LoadingSpinner } from '@/styles/LoadingStyled';
import { useState, useEffect, useContext } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { collection, getDocs, where, query } from '@firebase/firestore';
import { LikedContent, LikedNoContent, LikedWrapper } from './LikedStyled';

function Liked() {
  useDocumentTitle('좋아요 한 후기들');

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [likedMeetups, setLikedMeetups] = useState([]);
  const [selectedMeetup, setSelectedMeetup] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchLikedMeetups = async () => {
      try {
        if (!currentUser) {
          alert('로그인이 필요합니다.');
          navigate('/signup');
          return;
        }

        const likedMeetupsQuery = query(
          collection(db, 'meetups'),
          where('likedBy.' + currentUser.uid, '==', true)
        );

        const likedMeetupsSnapshot = await getDocs(likedMeetupsQuery);
        const likedMeetupsData = likedMeetupsSnapshot.docs.map((doc) =>
          doc.data()
        );

        setIsLoading(false);
        setLikedMeetups(likedMeetupsData);
      } catch (error) {
        console.error('Error fetching liked meetups: ', error);
        setIsLoading(true);
      }
    };

    fetchLikedMeetups();
  }, [currentUser]);

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

export default Liked;
