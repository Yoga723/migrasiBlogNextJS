// components/ErrorPage.tsx
import React from "react";

interface ErrorPageProps {
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
