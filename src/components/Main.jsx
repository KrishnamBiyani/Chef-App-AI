import React, { useRef } from "react";

function Main({ ingredientArr, setIngredientArr }) {
  const ingredientVal = useRef("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const inputValue = ingredientVal.current.value.trim();
    if (inputValue === "") {
      alert("Please enter a valid ingredient.");
      return;
    }
    const newIngredientArr = [...ingredientArr, inputValue];
    setIngredientArr(newIngredientArr);
    ingredientVal.current.value = "";
  };

  return (
    <>
      <div className="mt-[2px] py-[50px] md:py-[60px] px-0">
        <form
          action=""
          className="flex flex-col md:flex-row justify-center items-center py-[10px] px-0 gap-3 md:gap-[12px]"
          onSubmit={handleOnSubmit}
        >
          <input
            type="text"
            name=""
            ref={ingredientVal}
            className="w-full md:w-[57%] h-[38px] lg:h-[45px] px-[10px] text-[17px] rounded-[6px] border-2 border-black/15 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
            placeholder="e.g. oregano"
          />
          <button className="w-full md:w-[25%] h-[38px] lg:h-[45px] bg-black text-white font-semibold text-sm rounded-[6px] border-none hover:bg-gray-900 active:bg-gray-800 transition-colors cursor-pointer">
            + Add Ingredient
          </button>
        </form>

        {ingredientArr.length < 3 && (
          <p className="text-black text-sm mt-3 text-center">
            Minimum 3 ingredients required ({3 - ingredientArr.length} more
            needed)
          </p>
        )}
      </div>
    </>
  );
}

export default Main;
