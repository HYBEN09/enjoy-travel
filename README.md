<img src="https://capsule-render.vercel.app/api?type=waving&&color=1d5bd6&height=300&section=header&text=Enjoy%20Travel&fontSize=90&fontColor=ffff" />

### 프로젝트 주제

여행을 다녀온 사람들의 즐거웠던 경험을 공유하는 플랫폼 개발

### 프로젝트 기간

_2023. 4. 18 ~ 05.10_

### 팀원(Contributors)

| 김서현                                                                                                                   | 변혜빈                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| <a href="https://github.com/seoohyeon"><img src="https://avatars.githubusercontent.com/u/38703262?v=4" width="150"/></a> | <a href="https://github.com/HYBEN09"><img src="https://avatars.githubusercontent.com/u/104710243?v=4" width="150"/></a> |

### 목차

[1. 역할 분담 👩🏻‍💻](#1-역할-분담)<br/>
[2. 기술스택 🛠️](#2-기술스택)<br/>
[3. Collaboration Tools 🫂](#3-collaboration-tools)<br/>
[4. 기술 선정 이유 🧐](#4-기술-선정-이유)<br/>
[5. 페이지별 기능 소개 🚀](#5-페이지별-기능-소개)<br/>
[6. 프로젝트 사용법 ⭐️](#6-프로젝트-사용법)<br/>
[7. 피그마 시안 🌈](#7-피그마-시안)<br/>

<h2 id="1-역할-분담">1. 역할 분담 👩🏻‍💻</h2>

✈️ **김서현**

<br/>

✈️ **변혜빈**

- Input 컴포넌트
- Card 컴포넌트
- Header 컴포넌트
- Footer 컴포넌트
  <br/>
- Home

  - Weather api 사용
  - 이미지 슬라이더 구현
  - tripData.json 파일에서 데이터를 가져와 각각의 카드 생성

- Review

  - 사용자가 리뷰를 작성하고 제출 작성된 리뷰는 Firebase Firestore에 저장
  - whenOptionsData.json 파일에서 옵션 데이터를 가져와 Select 요소를 렌더링
  - 이미지 업로드 기능을 구현하고, 파일 선택 시 파일을 Blob URL로 변환하여 미리보기 기능을 구현
    <br/>

- Liked

  - 사용자가 좋아요한 후기를 모아서 보여주는 기능 구현
  - 로그인한 사용자만 접근할 수 있도록 하고, 로그인하지 않은 사용자는 로그인 페이지로 이동
  - 좋아요한 후기가 없을 경우 "찜한 목록이 없습니다."라는 메시지 보이게 구현.
    <br/>

- Community

  - Meetup 데이터를 생성된 날짜순으로 정렬하여 보여주기 구현
  - 카드 설명 길이가 일정 이상일 경우에는 생략 부호로 표시
  - 후기 카드클릭시 클릭된 Meetup의 제목과 정보를 선택된 Meetup 상태로 설정 후 선택된 Meetup의 URL 경로를 생성하여 이동 구현

<br/>

- Detail
  - 여행 후기 상세 페이지를 보여주는 컴포넌트
  - 제목이 변경될 때마다 데이터베이스에서 해당하는 Meetup 정보를 가져오는 기능을 구현
  - 현재 사용자가 작성한 리뷰인지 여부를 확인한 후, 조건에 따라 수정 가능하게 버튼을 표시하거나 없애는 기능을 구현
  - 현재 사용자의 좋아요 상태를 확인하고, 선택한 미팅 문서의 필드를 업데이트 로직 구현

<br/>

<h2 id="2-기술스택">2. 기술스택 🛠️</h2>

<div>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/eslint-4B3263?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
</div>

<div>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</div>

<div>
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
</div>

<h2 id="3-collaboration-tools">3. Collaboration Tools 🫂</h2>

<div>
<img src="https://img.shields.io/badge/Bitbucket-0052CC?style=for-the-badge&logo=bitbucket&logoColor=white">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
<img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white">
</div>

<h2 id="4-기술-선정-이유">4. 기술 선정 이유 🧐</h2>

- **Vite**
  vite는 CRA에 비해 개발 환경에서 더 빠른 성능을 제공하며, 빌드 성능도 향상되어 더 빠르게 개발을 할 수 있습니다.
  <br/>

- **TypeScript**
  코드 안정성을 높이고, 모던 자바스크립트를 지원하여 코드의 간결성과 가독성을 높이며, 명시적인 타입 선언을 통해 타입 오류를 최소화하여 안정적인 코드를 작성할 수 있었습니다.
  <br/>

- **Style-Component**
  styled-components를 사용하면 컴포넌트 스타일링을 간편하게 할 수 있으며, 재사용성이 높아지고 CSS 클래스 네임 충돌을 방지할 수 있습니다. 또한, Props를 이용한 동적인 스타일링이 가능하고, 테마 기능을 활용하여 전체적인 디자인 시스템을 구성할 수 있습니다.


<h2 id="5-페이지별-기능-소개">5. 페이지별 기능 소개 🚀</h2>

<details> 
<summary> ✈️ HOME 페이지</summary>
  <br/>
<div>
 <p> ✅ Weather 인풋창 </p>
 <img src="https://user-images.githubusercontent.com/104710243/236993459-7d14e37b-9046-4f03-b49d-049ad175957c.gif" />
</div>
  <br/>
<div>
 <p> ✅ Popular Country 슬라이더 </p>
 <img src="https://user-images.githubusercontent.com/104710243/236994809-4f4258e8-c308-45f5-93cb-f1765cef4ada.gif" />
</div>

 <br/>
<div>
 <p> ✅ Country 인풋창  </p>
 <img src="https://user-images.githubusercontent.com/104710243/236994660-12d9a670-0bde-493e-851e-c686a9268dbc.gif" />
</div>
</details>

<details> 
<summary> ✈️ 회원가입 페이지</summary>
  <br/>
<div>
 <p> ✅ 이메일 회원가입 </p>
 <img src="https://user-images.githubusercontent.com/104710243/236995974-f1f8408a-1b48-46b4-9b9d-ac64f014f186.gif" />
</div>
  
</details>

<details> 
  <summary> ✈️ 로그인 페이지</summary>
    <br/>
  <div>
    <p> ✅ 이메일 로그인 </p>
    <img src="https://user-images.githubusercontent.com/104710243/236996339-317f04d7-9236-45b5-ab03-8c99530d742f.gif" />
  </div>
</details>

<details> 
  <summary> ✈️ 리뷰 페이지</summary>
    <br/>
  <div>
    <p> ✅ 리뷰 작성 </p>
    <img src="https://user-images.githubusercontent.com/104710243/236997042-b6739f88-4127-4eae-aa24-ccb349db62bb.gif" />
  </div>

</details>

<details> 
  <summary> ✈️ 상세 후기 페이지</summary>
    <br/>
  <div>
    <p> ✅ 상세 후기 </p>
    <img src="https://user-images.githubusercontent.com/104710243/236997581-b0d1e3da-78a9-472a-93b6-c53618655202.gif" />
  </div>
</details>

<details> 
  <summary> ✈️ 좋아요 페이지 </summary>
    <br/>
  <div>
    <p> ✅ 좋아요 기능 </p>
    <img src="https://user-images.githubusercontent.com/104710243/236998050-947f45cb-f50e-4735-beed-f59aef5e4298.gif" />
  </div>
</details>

<details> 
  <summary> ✈️ 뉴스 페이지</summary>
    <br/>
  <div>
    <p> ✅ 뉴스 </p>
    <img src=" " />
  </div>

</details>



<h2 id="6-프로젝트-사용법">6. 프로젝트 사용법 ⭐️</h2>

<h2 id="6-프로젝트-사용법">6. 프로젝트 사용법 ⭐️</h2>
