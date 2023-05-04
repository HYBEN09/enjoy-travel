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
  EditFields,
  RedeMoreButton,
  TitleContainer,
} from './DetailStyled';
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  getDoc,
} from '@firebase/firestore';
import { auth } from '@/firebase/auth';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { db } from '@/firebase/firestore';
import { useParams } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import loading from '/public/assets/loading.svg';
import { AuthContext } from '@/context/AuthContext';
import { LoadingSpinner } from '@/styles/LoadingStyled';
import { useContext, useEffect, useState } from 'react';

function Detail() {
  const [liked, setLiked] = useState(false);
  const [reviewUid, setReviewUid] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [selectedMeetup, setSelectedMeetup] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');

  const navigate = useNavigate();
  const { meetupTitle } = useParams();
  const { currentUser } = useContext(AuthContext);

  //* -------------------------------------------------------------
  useEffect(() => {
    const fetchMeetup = async () => {
      try {
        setIsLoading(true);

        // Firestore에서 meetups 컬렉션의 데이터 가져오기
        const meetupsSnapshot = await getDocs(collection(db, 'meetups'));
        const meetupsData = meetupsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ref: doc.ref,
          data: doc.data(),
        }));

        // meetups 상태 변수에서 해당 타이틀 값과 일치하는 카드 정보를 찾아 selectedMeetup 상태 변수에 저장
        const meetup = meetupsData.find(
          (meetup) => meetup.data.title === meetupTitle
        );

        if (meetup) {
          // meetup이 존재하는 경우에만 setSelectedMeetup을 호출.
          setSelectedMeetup({ ...meetup.data, id: meetup.id });
          setLiked(meetup.data.liked || false);
          setReviewUid(meetup.data.uid);
        }

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

  const handleSave = async () => {
    try {
      setIsLoading(true);

      if (selectedMeetup) {
        const docRef = doc(db, 'meetups', selectedMeetup.id);
        const newTitle = editedTitle || selectedMeetup.title;
        const newDescription = editedDescription || selectedMeetup.description;

        if (
          newTitle !== selectedMeetup.title ||
          newDescription !== selectedMeetup.description
        ) {
          await updateDoc(docRef, {
            title: newTitle,
            description: newDescription,
          });

          const docSnap = await getDoc(docRef);
          const updatedMeetupData = { id: docSnap.id, ...docSnap.data() };

          setSelectedMeetup(updatedMeetupData);
          setIsEditing(false);
        }
      }
    } catch (error) {
      console.error('Error updating meetup: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  //* -------------------------------------------------------------
  const handleBack = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <>
      {isLoading && <LoadingSpinner src={loading} alt="로딩 중" />}
      {selectedMeetup && (
        <DetailWrapper>
          <DetailImageContainer>
            <img src={selectedMeetup.photoURL} alt="" />
            <BackButton onClick={handleBack}>
              <BackArrow size={30} />
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
                <button onClick={handleSave}>저장</button>
              </EditFields>
            ) : (
              <DetailTextContainer>
                {currentUser.uid === reviewUid && (
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

export default Detail;
