import { RefObject } from 'react';
import { Select } from './SelectFormStyled';
import whenOptionsData from '@/data/whenOptionsData.json';

interface SelectProps {
  options: { id: string; value: string; label: string }[];
  whenInputRef: RefObject<HTMLSelectElement>;
}

export function SelectForm({ whenInputRef }: SelectProps) {
  return (
    <>
      <Select required id="when" ref={whenInputRef}>
        {whenOptionsData.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </>
  );
}
