import React from "react";

function Ingredients({ ingredientArr, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 max-w-3xl mx-auto mb-8">
      <h1 className="text-gray-800 text-xl font-semibold mb-4">
        Ingredients on Hand
      </h1>

      <ul className="space-y-2 list-none pl-0">
        {ingredientArr.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="group relative py-2 px-4 bg-white rounded-lg shadow-sm
                       border border-gray-200 hover:border-red-100
                       text-gray-700 hover:text-gray-900 
                       hover:bg-red-50 transition-all duration-300
                       flex items-center justify-between
                       overflow-hidden"
          >
            <span className="flex-1 transition-all duration-300 group-hover:translate-x-2">
              {item}
            </span>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2
                         bg-red-500 text-white px-4 py-1 rounded-lg
                         transform translate-x-full group-hover:translate-x-0
                         transition-all duration-300 hover:bg-red-600
                         flex items-center space-x-2 cursor-pointer"
              onClick={() => handleDelete(index)}
              aria-label={`Delete ${item}`}
            >
              <span>Delete</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a1 1 0 011 1v2H9V4a1 1 0 011-1z"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Ingredients;
