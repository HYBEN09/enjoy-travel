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
    max-width: 180px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
