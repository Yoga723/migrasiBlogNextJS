"use client";
import React, { useState } from "react";
import LabelInput from "./LabelInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlus } from "@fortawesome/free-solid-svg-icons";

interface dynamicInputProps {
  name: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  maxInputs: number;
}

const DynamicInput = ({ name, placeholder, description, required, maxInputs }: dynamicInputProps) => {
  const [totalInputs, setTotalInputs] = useState([""]);
  const [values, setValues] = useState<string[]>([]);

  // Fungsi untuk menambahkan input baru. Digunakan tombol tambah (+)
  const handleAddInput = () => {
    setTotalInputs([...totalInputs, ""]);
  };

  // Filter totalInputs dan values, kemudian hanya mengembalikan elemen yang nomor indexnya tidak sama dengan index dari parameter
  const handleRemoveInput = (index: number) => {
    const newInput = totalInputs.filter((bagianTidakDiPakai, thisIndex) => thisIndex !== index);
    setTotalInputs(newInput);

    const newInputValue = values.filter((bagianTidakDiPakai, thisIndex) => thisIndex !== index);
    setValues(newInputValue);
  };

  const handleValuesChange = (index: number, value: string) => {
    const newInputs = [...totalInputs];
    newInputs[index] = value;
    setTotalInputs(newInputs);

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };
  return (
    <>
      <LabelInput
        htmlFor={name}
        description={description}
        required={required}
        title={name}
      />
      {totalInputs.map((input, index) => (
        <div
          key={index}
          className="flex gap-4 mb-2">
          <input
            type="text"
            id={`${name}-${index}`}
            name={`${name}-${index}`}
            value={input}
            onChange={(e) => handleValuesChange(index, e.target.value)}
            placeholder={placeholder}
            className="text-input w-fit"
          />
          {totalInputs.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveInput(index)}
              className="bg-transparent border-0">
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
        </div>
      ))}

      {totalInputs.length < maxInputs && (
        <button
          type="button"
          onClick={handleAddInput}
          className="w-full d-flex align-items-center justify-content-center gap-2 p-2 mt-2 border border-gray-300 rounded hover:bg-gray-50">
          <FontAwesomeIcon icon={faPlus} />
          <span>Add {name}</span>
        </button>
      )}
    </>
  );
};

export default DynamicInput;
