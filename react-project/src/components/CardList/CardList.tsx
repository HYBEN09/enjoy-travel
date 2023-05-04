import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import tripData from '@/data/tripData.json';
import 'slick-carousel/slick/slick-theme.css';
import { CardTitle, CardWrapper, SliderWrapper } from './CardListStyled';

export const CardList = () => {
  return (
    <>
      <CardTitle>Popular Country</CardTitle>
      <SliderWrapper tabIndex={0}>
        <Slider {...settings}>
          {tripData.map((card) => (
            <CardWrapper key={card.id}>
              <img src={card.img} alt={card.name} />
              <p>{card.name}</p>
            </CardWrapper>
          ))}
        </Slider>
      </SliderWrapper>
    </>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  accessibility: true, // 키보드 이벤트 활성화
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
