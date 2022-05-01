import React from "react";

import { FiChevronRight } from "react-icons/fi";

const Step2 = ({
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
        <input name="gender" placeholder="Gender" onChange={onFormChange} />
        <input
          name="birthday"
          type="date"
          placeholder="Birthday"
          onChange={onFormChange}
        />
        <input
          name="phoneNumber"
          placeholder="PhoneNumber"
          onChange={onFormChange}
        />
        <div className="flex flex-col">
          <span>
            <input
              id="asthma"
              name="history"
              type="checkbox"
              value="asthma"
              onChange={onFormChange}
            />
            <label htmlFor="asthma">Asthma</label>
          </span>
          <span>
            <input
              id="diabetes"
              name="history"
              type="checkbox"
              value="diabetes"
              onChange={onFormChange}
            />
            <label htmlFor="diabetes">Diabetes</label>
          </span>
          <span>
            <input
              id="vertigo"
              name="history"
              type="checkbox"
              value="vertigo"
              onChange={onFormChange}
            />
            <label htmlFor="vertigo">Vertigo</label>
          </span>
        </div>
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

export default Step2;
