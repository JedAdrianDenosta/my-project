import React from "react";

import { FiChevronRight } from "react-icons/fi";

const Step1 = ({
  currentStep,
  totalSteps,
  isActive,
  previousStep,
  nextStep,
  goToStep,
  firstStep,
  lastStep,
  onFormChange,
}) => {
  return (
    <div className="p-10">
      <h1>Step: {currentStep}</h1>
      <h1>{totalSteps}</h1>
      <h1>{typeof isActive}</h1>
      <div className="flex flex-col gap-y-5 my-8">
        <input name="name" placeholder="Name" onChange={onFormChange} />
        <input name="age" placeholder="Age" onChange={onFormChange} />
        <input name="address" placeholder="Address" onChange={onFormChange} />
      </div>
      <div>
        <button
          onClick={previousStep}
          className="bg-blue-500 rounded p-1 text-white transform rotate-180"
        >
          <FiChevronRight size="1.5rem" />
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-500 rounded p-1 text-white"
        >
          <FiChevronRight size="1.5rem" />
        </button>
      </div>
    </div>
  );
};

export default Step1;
