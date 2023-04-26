/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { Footer } from '@/components/Footer/Footer';
function Detail() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((expanded) => !expanded);
  };

  const text = ` 같으며, 얼마나 되는 튼튼하며, 그들에게 보이는 사막이다. 이 이상은
            같이, 물방아 주며, 쓸쓸하랴? 웅대한 가치를 천하를 속에서 약동하다.
            뼈 온갖 착목한는 산야에 뛰노는 크고 이상, 피다. 예수는 피는 곧
            유소년에게서 귀는 인간이 힘차게 봄바람이다. 같이, 영원히 꽃 용감하고
            일월과 주며, 예가 사는가 하는 사막이다. 청춘의 튼튼하며, 길을 전인
            평화스러운 때까지 인간에 운다. 우리는 온갖 얼마나 것이 이성은
            되려니와, 것은 것이다. 열매를 같이, 오직 보이는 것이다. 고동을 청춘
            사랑의 눈이 이것이다. 행복스럽고 아니더면, 새가 풍부하게 힘있다.
            그것을 원대하고, 기관과 쓸쓸한 대고, 그들의 말이다. 인도하겠다는
            가는 얼음과 인간이 모래뿐일 유소년에게서 타오르고 평화스러운
            방황하였으며, 뿐이다. 것은 가는 얼음과 설레는 것이다. 그들의 시들어
            가진 인류의 얼마나 사랑의 예수는 천고에 것이다.`;

  return (
    <>
      <DetailWrapper>
        <DetailImageContainer>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZvKhszupe6GzUufkgk7512kg3CYpXpofUA&usqp=CAU"
            alt=""
          />
        </DetailImageContainer>

        <DetailContainer>
          <span>2023년 4월</span>

          <TitleContainer>
            <h2>프랑스 파리에서</h2>
            <div>
              {' '}
              <button>
                <FiHeart />
              </button>
            </div>
          </TitleContainer>

          <DetailTextContainer>
            <p>{expanded ? text : text.slice(0, 200) + '...'}</p>
            {text.length > 200 && (
              <RedeMoreButton onClick={handleToggle}>
                {expanded ? 'Read Less' : 'Read More '}
              </RedeMoreButton>
            )}
          </DetailTextContainer>
        </DetailContainer>
      </DetailWrapper>

      <Button>
        <Link to="/community">커뮤니티로 돌아가기</Link>
      </Button>
      <Footer />
    </>
  );
}

const DetailWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;

  div {
    display: block;
    right: 0;
  }
`;

const DetailImageContainer = styled.div`
  img {
    width: 100%;
    height: 400px;
    max-width: 100%;
  }
`;

const DetailContainer = styled.div`
  margin-top: 1.2rem;

  span {
    font-weight: 600;
  }

  h2 {
    margin-top: 10px;
    font-size: 28px;
  }
`;

const DetailTextContainer = styled.div`
  margin-top: 1.2rem;
`;

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
  margin-bottom: 90px;

  IoChevronForwardOutline {
    color: green;
  }

  &:hover,
  &:active {
    background-color: var(--blue-700);
  }

  &:focus-visible {
    outline: 3px solid var(--blue-900);
  }
`;

const RedeMoreButton = styled.button`
  margin-left: 8px;
  color: var(--accent);
`;

export default Detail;
