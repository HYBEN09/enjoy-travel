/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  BackArrow,
  BackButton,
  Button,
  DetailContainer,
  DetailImageContainer,
  DetailTextContainer,
  DetailWrapper,
  RedeMoreButton,
  TitleContainer,
} from './DetailStyled';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { db } from '@/firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { collection, getDocs } from '@firebase/firestore';

function Detail() {
  const [expanded, setExpanded] = useState(false);
  const [selectedMeetup, setSelectedMeetup] = useState(null);

  const { meetupTitle } = useParams();

  useEffect(() => {
    const fetchMeetup = async () => {
      try {
        // Firestore에서 meetups 컬렉션의 데이터 가져오기
        const meetupsSnapshot = await getDocs(collection(db, 'meetups'));
        const meetupsData = meetupsSnapshot.docs.map((doc) => doc.data());

        // meetups 상태 변수에서 해당 타이틀 값과 일치하는 카드 정보를 찾아 selectedMeetup 상태 변수에 저장
        const meetup = meetupsData.find(
          (meetup) => meetup.title === meetupTitle
        );
        setSelectedMeetup(meetup);
      } catch (error) {
        console.error('Error fetching meetups: ', error);
      }
    };
    fetchMeetup();
  }, [meetupTitle]);

  const handleToggle = () => {
    setExpanded((expanded) => !expanded);
  };

  return (
    <>
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
              <button>
                <FiHeart />
              </button>
            </TitleContainer>
            <DetailTextContainer>
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
          </DetailContainer>
          <Button>
            <Link to="/community">
              Community <BackArrow size={28} />
            </Link>
          </Button>
        </DetailWrapper>
      )}

      <Footer />
    </>
  );
}

export default Detail;
