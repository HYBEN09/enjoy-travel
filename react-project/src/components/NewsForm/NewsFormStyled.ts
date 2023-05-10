import styled from 'styled-components';

export const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    max-width: 130px;

    img {
      display: block;
      width: 30rem;
      height: 150px;
      object-fit: cover;
    }
  }
  .contents {
    max-width: 200px;
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
  }
  p {
    margin: 0;
    line-height: 1.5;
    margin-top: 0.5rem;
    white-space: normal;
    font-size: 12px;
  }
  & + & {
    margin-top: 3rem;
  }
`;

export const NewsListBlock = styled.div`
  padding-bottom: 3rem;
  max-width: 360px;
  margin-top: 2rem;
  width: 100%;
  padding-left: 3px;
  padding-right: 5px;
`;
