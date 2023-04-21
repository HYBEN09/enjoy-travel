/* eslint-disable react/no-children-prop */
import Card from '@/components/Card/Card';
import styled from 'styled-components';

function Community() {
  return (
    <>
      <CommunityWrapper>
        <Card
          imageUrl={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIaDZX8_hRBOF1l3AQdK8tM4NXZw1-n5EsQ&usqp=CAU'
          }
          title={'영국 여행'}
          children={'날씨도 좋은'}
        />
        <Card
          imageUrl={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIaDZX8_hRBOF1l3AQdK8tM4NXZw1-n5EsQ&usqp=CAU'
          }
          title={'영국 여행'}
          children={'날씨도 좋은'}
        />
        <Card
          imageUrl={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIaDZX8_hRBOF1l3AQdK8tM4NXZw1-n5EsQ&usqp=CAU'
          }
          title={'영국 여행'}
          children={'날씨도 좋은'}
        />
        <Card
          imageUrl={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIaDZX8_hRBOF1l3AQdK8tM4NXZw1-n5EsQ&usqp=CAU'
          }
          title={'영국 여행'}
          children={'날씨도 좋은'}
        />
        <Card
          imageUrl={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIaDZX8_hRBOF1l3AQdK8tM4NXZw1-n5EsQ&usqp=CAU'
          }
          title={'영국 여행'}
          children={'날씨도 좋은'}
        />
        <Card
          imageUrl={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIaDZX8_hRBOF1l3AQdK8tM4NXZw1-n5EsQ&usqp=CAU'
          }
          title={'영국 여행'}
          children={'날씨도 좋은'}
        />
      </CommunityWrapper>
    </>
  );
}

const CommunityWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
`;

export default Community;
