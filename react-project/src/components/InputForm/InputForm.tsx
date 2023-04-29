import { Input } from '../Input/Input';

interface inputProps {
  titleInputRef: React.RefObject<HTMLInputElement>;
}

export function InputForm({ titleInputRef }: inputProps) {
  return (
    <>
      <Input
        type="text"
        id="title"
        placeholder="경험했던 것 중 가장 중요한 정보를 알려주세요"
        onChange={(e) => console.log(e.target.value)}
        ref={titleInputRef}
      />
    </>
  );
}
