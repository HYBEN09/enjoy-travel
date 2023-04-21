/* eslint-disable no-unused-vars */
import { FormEvent, useRef } from 'react';
import { InputForm } from '../InputForm/InputForm';
import { ImageForm } from '../ImageForm/ImageForm';
import { SelectForm } from '../SelectForm/SelectForm';
import whenOptionsData from '@/data/whenOptionsData.json';
import { TextAreaForm } from '../TextAreaForm/TextAreaForm';
import { Button, Form, FormGroup, Label } from './NewMeetupFormStyled';

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

  return (
    <Form onSubmit={submitHandler}>
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
