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
  getDoc,
} from '@firebase/firestore';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { db } from '@/firebase/firestore';
import { useParams } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import loading from '/public/assets/loading.svg';
import { AuthContext } from '@/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { LoadingSpinner } from '@/styles/LoadingStyled';

function Detail() {
  const [liked, setLiked] = useState(false);
  const [likedBy, setLikedBy] = useState({});
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
          setSelectedMeetup({ ...meetup.data, id: meetup.id });
          setLiked(meetup.data.liked || false);
          setReviewUid(meetup.data.uid);
          setLikedBy(meetup.data.likedBy || {});
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
    const userId = currentUser.uid;

    const meetupRef = collection(db, 'meetups');
    const meetupSnapshot = await getDocs(meetupRef);
    const meetupData = meetupSnapshot.docs
      .find((doc) => doc.data().title === meetupTitle)
      .data();
    const meetupId = meetupSnapshot.docs.find(
      (doc) => doc.data().title === meetupTitle
    ).id;

    const { liked: serverLiked, likedBy: serverLikedBy } = meetupData;

    const newLiked = !serverLiked;
    const newLikedBy = newLiked
      ? { ...serverLikedBy, [userId]: true }
      : { ...serverLikedBy, [userId]: false };

    setLiked(newLiked);
    setLikedBy(newLikedBy); // likedBy 값을 업데이트

    await updateDoc(doc(meetupRef, meetupId), {
      liked: newLiked,
      likedBy: newLikedBy,
    });
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
                {likedBy[currentUser.uid] ? <FaHeart /> : <FiHeart />}
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
