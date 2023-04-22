import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import VectorLight from "../../assets/icons/light/Vector.svg";
const options = [
  { id: 1, value: "Some Model Name 1" },
  { id: 2, value: "Some Model Name 2" },
  { id: 3, value: "Some Model Name 3" },
  { id: 4, value: "Some Model Name 4" },
];
function Select() {
  const { darkMode } = useContext(ThemeContext);
  const [selectedOption, setSelectedOption] = useState({ id: 3, value: "Some Model Name 3" });
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectOption = (optionValue: any) => {
    setSelectedOption(optionValue);
    setShowOptions(false);
  };
  return (
    <>
      <div className=" container slct_">
        <div
          className={`select-container ${showOptions ? "border_n" : ""} ${
            darkMode ? "darkSelect" : ""
          }`}
        >
          <div className="select-box" onClick={handleToggleOptions}>
            <span className="selected-option">
              <span className="model_">Model</span>
              <span className="option_">
                {/* @ts-ignore */}
                {selectedOption ? selectedOption.value : "Some Model Name 3"}
              </span>
            </span>
            <img
              src={VectorLight}
              className={showOptions ? "rotate_one" : "rotate_two"}
              alt="Error!"
            />
          </div>
          {showOptions && (
            <div className="options-container">
              <div className="hr_"></div>
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`option_div ${
                    //@ts-ignore
                    selectedOption.id === option.id ? "opt_active" : ""
                  }`}
                  onClick={() => handleSelectOption(option)}
                >
                  <span className="option_">{option.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Select;
