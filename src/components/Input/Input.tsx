import React from "react";
import "./input.scss";

export interface InputProps {
  /**
   * Input contents
   */
  label: string;
  /**
   * Optional click handler
   */
  type: "text" | "number" | "date";
}

/**
 * Primary UI component for user interaction
 */
const Input = ({ type, label, ...props }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...props} type={type} className="input" />
    </>
  );
};

export default Input;
