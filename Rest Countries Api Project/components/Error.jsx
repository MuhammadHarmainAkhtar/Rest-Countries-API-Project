import React from "react";
import { useRouteError } from "react-router-dom";
//SAMPLE ERROR.
export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Oop!!! Something Went Wrong!</h1>
      <h1>Error Status: {error.status}</h1>
    </>
  );
}
