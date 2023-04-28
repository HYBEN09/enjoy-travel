/* eslint-disable react/no-children-prop */
import { v4 as uuidv4 } from 'uuid';
import Card from '@/components/Card/Card';
import { db } from '@/firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { collection, getDocs } from '@firebase/firestore';
import { CommunityContent, CommunityWrapper } from './CommunityStyled';

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

export default Community;
