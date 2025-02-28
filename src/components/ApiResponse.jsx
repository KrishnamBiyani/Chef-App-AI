import React from "react";
import Markdown from "react-markdown";

function ApiResponse({ textresponse }) {
  return (
    <div
      className="mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
      aria-live="polite"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        🍳 AI Chef Recommends:
      </h2>
      <div className="prose max-w-full text-gray-700 break-words">
        <Markdown>{textresponse}</Markdown>
      </div>
    </div>
  );
}

export default ApiResponse;
