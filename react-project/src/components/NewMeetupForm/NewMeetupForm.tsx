/* eslint-disable no-unused-vars */
import { FormEvent, useRef } from 'react';
import { db } from '@/firebase/firestore';
import { storage } from '@/firebase/storage';
import { InputForm } from '../InputForm/InputForm';
import { ImageForm } from '../ImageForm/ImageForm';
import { SelectForm } from '../SelectForm/SelectForm';
import { collection, addDoc } from '@firebase/firestore';
import whenOptionsData from '@/data/whenOptionsData.json';
import { TextAreaForm } from '../TextAreaForm/TextAreaForm';
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import {
  Button,
  Form,
  FormGroup,
  Label,
  ReviewContent,
  ReviewTitle,
} from './NewMeetupFormStyled';
interface MeetupData {
  when: string;
  title: string;
  photoURL: string;
  description: string;
}

interface NewMeetupFormProps {
  onAddMeetup: (meetupData: MeetupData) => void;
}

export function NewMeetupForm(props: NewMeetupFormProps) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const whenInputRef = useRef<HTMLSelectElement>(null);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredWhen = whenInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const file = imageInputRef.current.files && imageInputRef.current.files[0];

    // 이미지 파일이 선택되었는지 확인
    if (!file) {
      return;
    }

    // 이미지 파일을 Firebase Storage에 업로드
    try {
      const storageRef = ref(storage, 'meetup-images/' + file.name);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      const meetupData: MeetupData = {
        when: enteredWhen,
        title: enteredTitle,
        photoURL: downloadURL,
        description: enteredDescription,
      };

      // Firebase Firestore에 미팅 데이터 추가
      const docRef = await addDoc(collection(db, 'meetups'), meetupData);
      console.log('Document written with ID: ', docRef.id);
      alert('리뷰가 생성되었습니다.');
      props.onAddMeetup(meetupData);
      window.location.reload();
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('다시 한번 입력해 주세요.');
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <ReviewTitle> 리뷰 작성 </ReviewTitle>

      <ReviewContent> 즐거웠던 경험을 남겨주세요 😊 </ReviewContent>
      <FormGroup>
        <Label htmlFor="when">언제 다녀오셨나요?</Label>
        <SelectForm options={whenOptionsData} whenInputRef={whenInputRef} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="title">제목</Label>
        <InputForm titleInputRef={titleInputRef} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="description">리뷰 쓰기</Label>
        <TextAreaForm descriptionInputRef={descriptionInputRef} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="image">이미지 업로드</Label>
        <ImageForm imageInputRef={imageInputRef} />
      </FormGroup>

      <FormGroup>
        <Button>리뷰 제출</Button>
      </FormGroup>
    </Form>
  );
}
