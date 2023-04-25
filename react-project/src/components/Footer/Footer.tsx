import { IoHome } from 'react-icons/io5';
import { FiHeart } from 'react-icons/fi';
import { ImNewspaper } from 'react-icons/im';
import { MdOutlineRateReview } from 'react-icons/md';
import { FooterButton, FooterWrapper, Tooltip } from './FooterStyled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Footer() {
  const [tooltipText, setTooltipText] = useState('');
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

  // tooltip
  const handleMouseEnter = (text: string) => {
    setTooltipText(text);
  };

  const handleMouseLeave = () => {
    setTooltipText('');
  };

  return (
    <>
      <FooterWrapper>
        <FooterButton
          type="button"
          aria-label="홈"
          onClick={goToHome}
          onMouseEnter={() => handleMouseEnter('홈으로 이동')}
          onMouseLeave={handleMouseLeave}
        >
          <IoHome />
        </FooterButton>
        <FooterButton type="button" aria-label="찜">
          <FiHeart />
        </FooterButton>
        <FooterButton
          type="button"
          aria-label="뉴스"
          onClick={goToNews}
          onMouseEnter={() => handleMouseEnter('뉴스로 이동')}
          onMouseLeave={handleMouseLeave}
        >
          <ImNewspaper />
        </FooterButton>
        <FooterButton
          type="button"
          aria-label="커뮤니티"
          onClick={goToCommunity}
          onMouseEnter={() => handleMouseEnter('커뮤니티로 이동')}
          onMouseLeave={handleMouseLeave}
        >
          <MdOutlineRateReview />
        </FooterButton>
      </FooterWrapper>
      {tooltipText && <Tooltip>{tooltipText}</Tooltip>}
    </>
  );
}
