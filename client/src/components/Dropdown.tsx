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
  error,
  value,
}: DroprdownProps) => {
  const [isOpen, setIsOpen] = useState(isForm);

  const renderOptions = () => {
    return options.map((option) => {
      // can manage beavior like checkbox
      // used radio and not checkbox to let user chose just one option for type of field
      const handlebehavior = (e: React.MouseEvent<HTMLInputElement>) => {
        if (value === option.id) {
          setFilter("");
          e.currentTarget.checked = false;
        } else {
          setFilter(e.currentTarget.value);
        }
      };
      return (
        <div key={option.id}>
          <label className="dropdown-checkbox-container">
            <input
              onClick={handlebehavior}
              type="radio"
              value={option.id}
              name={inputName}
              required={isForm}
              checked={value === option.id}
            />
            {option.name}
            <span className="checkmark"></span>
          </label>
        </div>
      );
    });
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-label" onClick={() => setIsOpen(!isOpen)}>
        <h5 className={error && "label-error"}>{label}</h5>
        {!isForm && (
          <FontAwesomeIcon
            className={isOpen ? "open" : "closed"}
            icon={faArrowRight}
          />
        )}
      </div>
      {isOpen && renderOptions()}
    </div>
  );
};

export default Dropdown;
