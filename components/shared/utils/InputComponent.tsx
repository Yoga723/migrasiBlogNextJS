"use client";
import React from "react";

export interface InputProps {
  label?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute; // default untuk input adalah "text"
  placeholder?: string;
  className?: string;
  description?: string;
  options?: { label: string; value: string | number }[]; // untuk radio/checkbox grouop
  required?: any;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  options,
  description,
  required,
  ...props
}) => {
  // Render a group of radio buttons if type is "radio" and options provided
  // untuk menambahkan option di radio lihat komen dibawah ini
  // <InputComponent options={[{label:"nama label A", value:"nama value A"},{label:"nama label B", value:123}]} onClick={() => handleOnClick()}/>

  if (type === "radio" && options) {
    return (
      <div>
        {label && (
          <p>
            {label} {required && <span style={{ color: "red" }}> *</span>}
            {description && (
              <span
                className="tooltip-icon"
                title={description}>
                ?
              </span>
            )}
          </p>
        )}
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={name}
              value={option.value}
              {...props}
            />
            {option.label}
          </label>
        ))}
      </div>
    );
  }

  // Render a group of checkboxes if type is "checkbox" and options provided
  // untuk menambahkan option di checkbox lihat komen dibawah ini
  // <InputComponent options={[{label:"nama label A", value:"nama value A"},{label:"nama label B", value:123}]} onClick={() => handleOnClick()}/>
  if (type === "checkbox" && options) {
    return (
      <div>
        {label && (
          <p>
            {label}
            {required && <span style={{ color: "red" }}> *</span>}
            {description && (
              <span
                className="tooltip-icon"
                title={description}>
                ?
              </span>
            )}
          </p>
        )}
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              {...props}
            />
            {option.label}
          </label>
        ))}
      </div>
    );
  }

  // Render file input
  if (type === "file") {
    return (
      <div>
        {label && (
          <label htmlFor={name}>
            {label}
            {required && <span style={{ color: "red" }}> *</span>}
            {description && (
              <span
                className="tooltip-icon"
                title={description}>
                ?
              </span>
            )}
          </label>
        )}
        <input
          type="file"
          name={name}
          id={name}
          {...props}
        />
      </div>
    );
  }

  // input untuk text, password, email, number, dll.
  return (
    <div>
      {label && (
        <label htmlFor={name}>
          {label}{required && <span style={{ color: "red" }}> *</span>}
          {description && (
            <span
              className="tooltip-icon"
              title={description}
              style={{
                border: "1px solid #ccc",
                borderRadius: "50%",
                padding: "0 4px",
                cursor: "help",
                fontSize: "0.9em",
                marginLeft: "4px",
              }}>
              ?
            </span>
          )}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputComponent;
