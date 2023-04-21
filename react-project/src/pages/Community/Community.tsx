/* eslint-disable react/no-children-prop */
import Card from '@/components/Card/Card';
import { db } from '@/firebase/firestore';
import { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
function Community() {
  const [meetups, setMeetups] = useState([]);

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

  return (
    <>
      <CommunityWrapper>
        {meetups.map((meetup) => (
          <Card
            key={uuidv4()}
            imageUrl={meetup.photoURL}
            title={meetup.title}
            children={meetup.description}
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
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
`;

export default Community;
