"use client";
import React from "react";
function BrightSnippet({ children }) {
  // children is brighted code on the server.
  const [snippetShown, setSnippetShown] = React.useState(false);
  if (snippetShown) {
    return children;
  }
  return (
    <div className="reveal">
      <button onClick={() => setSnippetShown(true)}>Reveal Content</button>
    </div>
  );
}

export default BrightSnippet;
