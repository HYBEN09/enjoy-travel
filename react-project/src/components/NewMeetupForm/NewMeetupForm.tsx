/* eslint-disable no-unused-vars */
import {
  Button,
  DivContainer,
  Form,
  FormGroup,
  Image,
  ImageContainer,
  ImageInput,
  Input,
  Label,
  Select,
  TextArea,
} from './NewMeetupFormStyled';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import whenOptionsData from '@/data/whenOptionsData.json';
import imageUpload from '../../../public/assets/imageUpload.svg';

interface MeetupData {
  when: string;
  title: string;
  image: string;
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

  const [descriptionLength, setDescriptionLength] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredWhen = whenInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData: MeetupData = {
      when: enteredWhen,
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  function HandlerChangeText(event: ChangeEvent<HTMLTextAreaElement>) {
    const enteredDescription = event.target.value;
    setDescriptionLength(enteredDescription.length);
  }

  // 이미지 업로드
  function handleImageUploadClick() {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  }

  //이미지 파일의 변경 이벤트를 처리
  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // 파일을 Blob URL로 변환
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    } else {
      setSelectedImage(null);
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label htmlFor="when">언제 다녀오셨나요?</Label>
        <Select required id="when" ref={whenInputRef}>
          {whenOptionsData.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="title">제목</Label>
        <Input
          type="text"
          required
          id="title"
          placeholder="경험했던 것 중 가장 중요한 정보를 알려주세요"
          ref={titleInputRef}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="description">리뷰 쓰기</Label>
        <TextArea
          id="description"
          required
          placeholder="너무 좋았어요!"
          rows={5}
          maxLength={500}
          ref={descriptionInputRef}
          onChange={HandlerChangeText}
        ></TextArea>
        <DivContainer>{descriptionLength}/500 최대글자수</DivContainer>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="image">이미지 업로드</Label>
        <ImageContainer>
          {selectedImage ? (
            <button type="button" onClick={handleImageUploadClick}>
              <Image src={selectedImage} alt="선택된 이미지" />
            </button>
          ) : (
            <button type="button" onClick={handleImageUploadClick}>
              <Image src={imageUpload} alt="이미지 업로드" />
            </button>
          )}
          <ImageInput
            type="file"
            id="image"
            ref={imageInputRef}
            onChange={handleImageChange}
          />
        </ImageContainer>
      </FormGroup>

      <FormGroup>
        <Button>리뷰 제출</Button>
      </FormGroup>
    </Form>
  );
}
