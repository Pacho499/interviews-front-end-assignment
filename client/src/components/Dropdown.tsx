import { DroprdownProps } from "../types/components";
import "../styles/Dropdown.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({
  label,
  options,
  setFilter,
  inputName,
  isForm,
}: DroprdownProps) => {
  const [isOpen, setIsOpen] = useState(isForm);
  return (
    <div className="dropdown-container">
      <div className="dropdown-label" onClick={() => setIsOpen(!isOpen)}>
        <h5>{label}</h5>
        {!isForm && (
          <FontAwesomeIcon
            className={isOpen ? "open" : "closed"}
            icon={faArrowRight}
          />
        )}
      </div>
      {isOpen &&
        options.map((option) => {
          return (
            <div key={option.id}>
              <label className="dropdown-checkbox-container">
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFilter(e.target.value)
                  }
                  type="radio"
                  value={option.id}
                  name={inputName}
                  required={isForm}
                />
                {option.name}
                <span className="checkmark"></span>
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default Dropdown;
