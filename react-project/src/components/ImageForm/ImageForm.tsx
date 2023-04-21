import { ChangeEvent, RefObject, useState } from 'react';
import imageUpload from '../../../public/assets/imageUpload.svg';
import { Image, ImageContainer, ImageInput } from './ImageFormStyled';

interface inputProps {
  imageInputRef: RefObject<HTMLInputElement>;
}

export function ImageForm({ imageInputRef }: inputProps) {
  const [selectedImage, setSelectedImage] = useState(null);

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
    <>
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
    </>
  );
}
