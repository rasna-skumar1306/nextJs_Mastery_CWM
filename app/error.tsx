"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <div>Unexpected Error has occured.</div>;
      <button className="btn" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default ErrorPage;
