"use client";
import React, { useState } from "react";
import LabelInput from "./LabelInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

interface DynamicAuthorInputProps {
  name: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  maxInputs: number;
}

const DynamicAuthorInput = (props: DynamicAuthorInputProps) => {
  const authors = useSelector((state: RootState) => state.authors.authorsDetail)
    .slice()
    .sort((a, b) => a.authorName.localeCompare(b.authorName));
  const [totalInputs, setTotalInputs] = useState([""]);
  const [values, setValues] = useState<string[]>([authors[0].authorName]);

  // Add a new input, defaulting the selected author to the first one.
  const handleAddInput = () => {
    setTotalInputs([...totalInputs, ""]);
    setValues([...values, authors[0].authorName]);
  };

  // Remove input sesuai dengan index
  const handleRemoveInput = (index: number) => {
    const newTotalInput = totalInputs.filter((iniTidakDipakai, i) => i !== index);
    setTotalInputs(newTotalInput);

    const newValues = values.filter((iniTidakDipakai, i) => i !== index);
    setValues(newValues);
  };

  // Update data dari input yang dipilih/sesuai dengan index
  const handleSelectChange = (index: number, selectedAuthorName: string) => {
    const newValues = [...values];
    newValues[index] = selectedAuthorName;
    setValues(newValues);
  };

  return (
    <>
      <LabelInput
        htmlFor={props.name}
        title="Authors"
        description={props.description}
        required={props.required}
      />
      <div className=" d-flex flex-wrap gap-3 mt-4 align-items-stretch justify-content-center">
        {totalInputs.map((tidakDipakai, index) => {
          // Find the selected author object based on the current value.
          const selectedAuthor = authors.find((author) => author.authorName === values[index]) || authors[0];
          return (
            <div
              key={index}
              id={`author-card-${index}`}
              className="d-flex gap-3 flex-column h-auto align-items-center justify-content-around position-relative">
              <div className="d-flex gap-2 justify-content-around">
                <select
                  name={`${props.name}-${index}`}
                  id={`${props.name}-${index}`}
                  value={values[index]}
                  onChange={(e) => handleSelectChange(index, e.target.value)}>
                  <option
                    className="fst-italic"
                    value="">
                    Select Author
                  </option>
                  {authors.map((author, idx) => (
                    <option
                      key={idx}
                      value={author.authorName}>
                      {author.authorName}
                    </option>
                  ))}
                </select>
                {totalInputs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveInput(index)}
                    className="bg-transparent border-0">
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      style={{ width: 20, height: 20 }}
                    />
                  </button>
                )}
              </div>
              <Image
                src={selectedAuthor.imgPath}
                width={250}
                height={250}
                className="rounded"
                alt={selectedAuthor.authorName}
              />
              <p
                className="fst-italic"
                style={{ width: 250 }}>
                {selectedAuthor.quotes}
              </p>
            </div>
          );
        })}
        {totalInputs.length < props.maxInputs && (
          <button
            type="button"
            onClick={handleAddInput}
            className="w-full d-flex align-items-center justify-content-center gap-1 p-2 border border-gray-300 rounded hover:bg-gray-50">
            <FontAwesomeIcon icon={faPlus} />
            <span>Add {props.name}</span>
          </button>
        )}
      </div>
    </>
  );
};

export default DynamicAuthorInput;
