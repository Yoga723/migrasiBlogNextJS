"use client";
import React, { useEffect, useState } from "react";
import LabelInput from "./LabelInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { storeAuthor } from "@/app/store";

interface DynamicAuthorInputProps {
  name: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  maxInputs: number;
}

const DynamicAuthorInput = (props: DynamicAuthorInputProps) => {
  // Ambil data authors dari redux store
  const [authorState, setAuthorState] = useState(storeAuthor.getState().authorsDetail);
  const [totalInputs, setTotalInputs] = useState([""]);
  const [values, setValues] = useState<string[]>([authorState[0].authorName]);

  useEffect(() => {
    // Subscribe to the store.
    const unsubscribe = storeAuthor.subscribe(() => {
      // Update state bila terdapat perubahan di storeAuthor
      setAuthorState(storeAuthor.getState().authorsDetail);
    });

    return () => unsubscribe();
  }, []);

  // Add a new input, defaulting the selected author to the first one.
  const handleAddInput = () => {
    setTotalInputs([...totalInputs, ""]);
    setValues([...values, authorState[0].authorName]);
  };

  // Remove an input (and its corresponding selected author value) at a given index.
  const handleRemoveInput = (index: number) => {
    const newTotalInput = totalInputs.filter((iniTidakDipakai, i) => i !== index);
    setTotalInputs(newTotalInput);

    const newValues = values.filter((iniTidakDipakai, i) => i !== index);
    setValues(newValues);
  };

  // Update the selected author for the input at a given index.
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
      <div className="d-flex flex-column flex-md-row gap-3 mt-4 align-items-center justify-content-start">
        {totalInputs.map((tidakDipakai, index) => {
          // Find the selected author object based on the current value.
          const selectedAuthor = authorState.find((author) => author.authorName === values[index]) || authorState[0];
          return (
            <div
              key={index}
              className="d-flex gap-3 flex-column align-items-center justify-content-center position-relative">
              <div className="d-flex justify-content-around w-100">
                <select
                  name={`${props.name}-${index}`}
                  id={`${props.name}-${index}`}
                  value={values[index]}
                  onChange={(e) => handleSelectChange(index, e.target.value)}>
                  {authorState.map((author, idx) => (
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
              <p className="fst-italic">{selectedAuthor.quotes}</p>
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
