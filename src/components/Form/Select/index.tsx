import React from 'react';
import { SelectContainer, SelectLabel, Select } from "./styles";

interface Option {
  value: string;
  label: string;
}

interface SelectFormProps {
  name: string;
  label: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectForm: React.FC<SelectFormProps> = ({ name, label, options, onChange }) => {
  return (
    <SelectContainer>
      <SelectLabel htmlFor={name}>{label}</SelectLabel>
      <Select name={name} id={name} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};
