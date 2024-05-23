import React, { useEffect } from "react";

function GetData() {
  // using state management, manage
  // error, loading and success states

  async function fetchData() {
    // complete the code here
  }

  // call the fetch data function when the
  // page loads

  // Here is the basic data boilerplate
  return (
    <>
      {/* do not edit the code below this line */}
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Username: {data.username}</h2>
    </>
  );
}

export default GetData;
