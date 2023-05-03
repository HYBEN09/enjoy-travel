import styled from 'styled-components';

export const CardTitle = styled.h2`
  margin-top: 5rem;
  margin-left: 3px;
  color: var(--primary);
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-weight: 600;
    width: 100%;
    text-align: center;
    z-index: 10;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;

    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    z-index: 1;
  }
  .slick-prev {
    left: 10px;
    &::before {
      font-size: 40px;
      color: var(--white);
    }
  }
  .slick-next {
    right: 10px;
    &::before {
      font-size: 40px;
      color: var(--white);
    }
  }
`;
