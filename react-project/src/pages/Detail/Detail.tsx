/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  BackArrow,
  BackButton,
  Button,
  DetailContainer,
  DetailImageContainer,
  DetailTextContainer,
  DetailWrapper,
  EditButton,
  RedeMoreButton,
  TitleContainer,
} from './DetailStyled';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { db } from '@/firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loading from '/public/assets/loading.svg';
import { LoadingSpinner } from '@/styles/LoadingStyled';
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
} from '@firebase/firestore';
import { auth } from '@/firebase/auth';
import { BsPencilSquare } from 'react-icons/bs';
import styled from 'styled-components';

function Detail() {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewUid, setReviewUid] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [selectedMeetup, setSelectedMeetup] = useState(null);

  const { meetupTitle } = useParams();
  //* -------------------------------------------------------------
  useEffect(() => {
    const fetchMeetup = async () => {
      try {
        setIsLoading(true);

        // Firestore에서 meetups 컬렉션의 데이터 가져오기
        const meetupsSnapshot = await getDocs(collection(db, 'meetups'));
        const meetupsData = meetupsSnapshot.docs.map((doc) => doc.data());
        console.log(meetupsData);

        // meetups 상태 변수에서 해당 타이틀 값과 일치하는 카드 정보를 찾아 selectedMeetup 상태 변수에 저장
        const meetup = meetupsData.find(
          (meetup) => meetup.title === meetupTitle
        );

        setSelectedMeetup(meetup);
        setLiked(meetup.liked || false);
        setReviewUid(meetup.uid);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching meetups: ', error);
      }
    };
    fetchMeetup();
  }, [meetupTitle]);

  //* -------------------------------------------------------------
  const handleToggle = () => {
    setExpanded((expanded) => !expanded);
  };

  //* -------------------------------------------------------------
  const handleLike = async () => {
    if (!selectedMeetup) return;
    setLiked((liked) => !liked);

    // 현재 로그인한 사용자의 uid 가져오기
    const userId = auth.currentUser.uid;

    // meetups 컬렉션에서 해당 meetup 찾기
    const meetupRef = collection(db, 'meetups');
    const meetupSnapshot = await getDocs(meetupRef);
    const meetupId = meetupSnapshot.docs.find(
      (doc) => doc.data().title === meetupTitle
    ).id;

    // meetups 컬렉션에서 해당 meetup의 liked 값을 업데이트
    await updateDoc(doc(meetupRef, meetupId), { liked: !liked });

    // userliked 컬렉션에서 해당 사용자의 데이터 가져오기
    const userLikedRef = collection(db, 'userliked');
    const userLikedSnapshot = await getDocs(userLikedRef);
    const userLikedDoc = userLikedSnapshot.docs.find(
      (doc) => doc.id === userId
    );

    // userliked 컬렉션에서 해당 사용자의 데이터가 없으면 새로운 데이터를 추가
    if (!userLikedDoc) {
      await setDoc(doc(userLikedRef, userId), { likedMeetups: [meetupId] });
    } else {
      const likedMeetups = userLikedDoc.data().likedMeetups || [];
      const updatedLikedMeetups = liked
        ? likedMeetups.filter((id) => id !== meetupId)
        : [...likedMeetups, meetupId];

      await updateDoc(doc(userLikedRef, userId), {
        likedMeetups: updatedLikedMeetups,
      });
    }
  };

  //* -------------------------------------------------------------

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log('save');
  };

  return (
    <>
      {isLoading && <LoadingSpinner src={loading} alt="로딩 중" />}
      {selectedMeetup && (
        <DetailWrapper>
          <DetailImageContainer>
            <img src={selectedMeetup.photoURL} alt="" />
            <BackButton>
              <Link to="/community">
                <BackArrow size={30} />
              </Link>
            </BackButton>
          </DetailImageContainer>
          <DetailContainer>
            <span>🗓️ {selectedMeetup.when}</span>
            <TitleContainer>
              <h2>{selectedMeetup.title}</h2>
              <button onClick={handleLike}>
                {liked ? <FaHeart /> : <FiHeart />}
              </button>
            </TitleContainer>
            {isEditing ? (
              <EditFields>
                <input
                  type="text"
                  defaultValue={selectedMeetup.title}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  defaultValue={selectedMeetup.description}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </EditFields>
            ) : (
              <DetailTextContainer>
                {auth.currentUser.uid === reviewUid && ( // 추가된 조건문
                  <EditButton>
                    <button type="button" onClick={handleEdit}>
                      <BsPencilSquare />
                    </button>
                  </EditButton>
                )}
                <p>
                  {expanded
                    ? selectedMeetup.description
                    : selectedMeetup.description.slice(0, 200) + ' ...'}
                </p>
                {selectedMeetup.description.length > 200 && (
                  <RedeMoreButton onClick={handleToggle}>
                    {expanded ? 'Read Less' : 'Read More '}
                  </RedeMoreButton>
                )}
              </DetailTextContainer>
            )}
          </DetailContainer>
          <Button>
            <Link to="/community">
              Community <BackArrow size={28} />
            </Link>
          </Button>
        </DetailWrapper>
      )}
    </>
  );
}

const EditFields = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }

  textarea {
    height: 10rem;
  }
`;
export default Detail;
