import React from "react";
import useAdvice from "../useAdvice";
import DiceIcon from "../images/icon-dice.svg";
import DividerMobile from "../images/pattern-divider-mobile.svg";

const AdviceGenerator: React.FC = () => {
  const [advice, loading, regenerateAdvice] = useAdvice();

  const handleButtonClick = () => {
    regenerateAdvice();
  };

  if (loading) {
    return (
      <div className="text-center bg-neutral-100 rounded-xl p-5">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-center bg-neutral-200 rounded-xl py-5 px-6 sm:max-w-[30rem] min-h-[10rem] mx-4 relative">
      <p className="text-sm text-secondary tracking-[.25rem] font-semibold  uppercase my-3">
        Advice #{advice?.id}
      </p>
      <p className="text-xl text-primary font-bold">"{advice?.advice}"</p>

      <img src={DividerMobile} alt="divider" className="mx-auto my-10 w-[25rem] h-auto" />

      <button
        className="p-4 rounded-full bg-secondary absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 transition duration-500 ease-in-out hover:scale-[1.2]"
        onClick={handleButtonClick}
      >
        <img src={DiceIcon} alt="dice" />
      </button>
    </div>
  );
};

export default AdviceGenerator;
