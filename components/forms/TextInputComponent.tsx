"use client";
import React from "react";
import LabelInput from "./LabelInput";

export interface InputProps {
  name: string;
  labelTitle: string;
  type?: React.HTMLInputTypeAttribute; // default untuk input adalah "text"
  placeholder?: string;
  className?: string;
  divClassName?: string;
  inputClassName?: string;
  onChange?: () => void;
  onClick?: () => void;
  description?: string; // Property ini untuk menjelaskan tentang input
  required?: boolean;
}

const TextInputComponent: React.FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  description,
  required,
  divClassName,
  inputClassName,
  labelTitle,
  ...props
}) => {
  return (
    <div className={divClassName}>
      <LabelInput
        htmlFor={name}
        title={labelTitle}
        required={required}
        description={description}
      />
      <input
        type={type}
        name={name}
        id={name}
        className={inputClassName}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default TextInputComponent;
