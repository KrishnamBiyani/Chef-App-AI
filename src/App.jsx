import { useState, useRef } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Main from "./components/Main";
import Generate from "./components/Generate";
import ApiResponse from "./components/ApiResponse";
import { getRecipe } from "./api";

function App() {
  const [ingredientArr, setIngredientArr] = useState([]);
  const [textresponse, setTextResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const responseRef = useRef(null);

  const handleOnClick = async () => {
    setLoading(true);
    try {
      const recipe = await getRecipe(ingredientArr);
      setTextResponse(recipe);
      setTimeout(() => {
        if (responseRef.current) {
          responseRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteIngredient = (index) => {
    setIngredientArr((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <center>
        <div className="w-3/4 lg:w-1/2 border-2 mt-16">
          <Header />
          <div className="bg-[#FAFAF8] pt-0 px-[30px] pb-[30px] shadow-[0_2px_3px_0_rgba(0,0,0,0.10),0_1px_2px_0_rgba(0,0,0,0.06)]">
            {/* Main Input Section */}
            <Main
              ingredientArr={ingredientArr}
              setIngredientArr={setIngredientArr}
            />

            {/* Ingredients List */}
            {ingredientArr.length !== 0 && (
              <Ingredients
                ingredientArr={ingredientArr}
                onDelete={handleDeleteIngredient}
              />
            )}

            {/* Generate Button */}
            {ingredientArr.length >= 3 && (
              <Generate handleonclick={handleOnClick} loading={loading} />
            )}

            {/* Response Section */}
            {textresponse && (
              <div ref={responseRef} className="mt-8">
                <ApiResponse textresponse={textresponse} />
              </div>
            )}
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
