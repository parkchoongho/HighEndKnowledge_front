import React from "react";
import { match } from "react-router-dom";

export default function Quiz(match) {
  return (
    <>
      <h2>Quiz info {match.params}</h2>
    </>
  );
}

// rafce: Creates a React Arrow Function Component with ES7 module system (ES7 React/Redux/GraphQL/React-Native snippets);
// rfc: Creates a React Functional Component with ES7 module system (ES7 React/Redux/GraphQL/React-Native snippets);
