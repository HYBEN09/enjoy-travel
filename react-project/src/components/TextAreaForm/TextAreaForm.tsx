import { ChangeEvent, RefObject, useState } from 'react';
import { DivContainer, TextArea } from './TextAreaFormStyled';

interface TextAreaProps {
  descriptionInputRef: RefObject<HTMLTextAreaElement>;
}

export function TextAreaForm({ descriptionInputRef }: TextAreaProps) {
  const [descriptionLength, setDescriptionLength] = useState(0);

  function HandlerChangeText(event: ChangeEvent<HTMLTextAreaElement>) {
    const enteredDescription = event.target.value;
    setDescriptionLength(enteredDescription.length);
  }

  return (
    <>
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
    </>
  );
}
