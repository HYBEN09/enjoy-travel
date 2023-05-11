import { IoHome } from 'react-icons/io5';
import { FiHeart } from 'react-icons/fi';
import { ImNewspaper } from 'react-icons/im';
import { MdOutlineRateReview } from 'react-icons/md';
import { FooterButton, FooterWrapper } from './FooterStyled';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  // navigation
  const goToHome = () => {
    navigate('/');
  };

  const goToCommunity = () => {
    navigate('/community');
  };

  const goToNews = () => {
    navigate('/news');
  };

  const goToLiked = () => {
    navigate('/liked');
  };

  return (
    <>
      <FooterWrapper>
        <FooterButton type="button" aria-label="홈" onClick={goToHome}>
          <IoHome />
        </FooterButton>
        <FooterButton type="button" aria-label="찜" onClick={goToLiked}>
          <FiHeart />
        </FooterButton>
        <FooterButton type="button" aria-label="뉴스" onClick={goToNews}>
          <ImNewspaper />
        </FooterButton>
        <FooterButton
          type="button"
          aria-label="커뮤니티"
          onClick={goToCommunity}
        >
          <MdOutlineRateReview />
        </FooterButton>
      </FooterWrapper>
    </>
  );
}
