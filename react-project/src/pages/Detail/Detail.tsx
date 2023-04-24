import styled from 'styled-components';
import { Header } from '@/components/Header/Header';
import { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '@/firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

function Detail() {
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
      <Header />
      {meetups.map((meetup) => (
        <div key={uuidv4()}>
          <span>{meetup.when}</span>
          <img src={meetup.photoURL} alt="" />
          <h2>{meetup.title}</h2>
          <p>{meetup.description}</p>
        </div>
      ))}

      <Button>커뮤니티</Button>
    </>
  );
}

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

  &:hover,
  &:active {
    background-color: var(--blue-700);
  }

  &:focus-visible {
    outline: 3px solid var(--blue-900);
  }
`;

export default Detail;
