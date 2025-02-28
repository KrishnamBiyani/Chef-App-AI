import React from "react";

function Generate({ handleonclick, loading }) {
  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <button
        onClick={handleonclick}
        disabled={loading}
        className={`w-40 h-10 rounded-lg font-medium text-base transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          loading
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#D17557] text-white hover:bg-[#bb654a] active:bg-[#a6573f]"
        }`}
      >
        {loading ? "Loading..." : "Get a Recipe"}
      </button>
    </div>
  );
}

export default Generate;
