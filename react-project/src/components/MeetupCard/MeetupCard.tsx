/* eslint-disable react/no-children-prop */
import Card from '../Card/Card';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loading from '/public/assets/loading.svg';
import { LoadingSpinner } from '@/styles/LoadingStyled';
import { fetchMeetups } from '../../utils/fetchMeetups';
export function MeetupCard() {
  const [meetups, setMeetups] = useState([]);
  const [selectedMeetup, setSelectedMeetup] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeetupsData = async () => {
      const meetupsData = await fetchMeetups();

      meetupsData.sort((a, b) => b.createdAt - a.createdAt);

      setMeetups(meetupsData);
      setIsLoading(false);
    };
    fetchMeetupsData();
  }, []);

  const handleCardClick = (meetupTitle, meetup) => {
    setSelectedMeetup(meetup);
    navigate(`/community/${meetupTitle}`);
  };

  return (
    <>
      {isLoading && <LoadingSpinner src={loading} alt="로딩 중" />}
      {meetups.map((meetup) => (
        <Card
          key={uuidv4()}
          imageUrl={meetup.photoURL}
          title={meetup.title}
          children={meetup.description}
          onClick={() => handleCardClick(meetup.title, meetup)}
        />
      ))}
    </>
  );
}
