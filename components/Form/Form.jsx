'use client'

import { useState, useEffect } from "react";
import styles from "./Form.module.css"; // Assuming you have a CSS module

const Form = () => {
  // Separate states for each field
  const [type, setType] = useState(null);
  const [prep, setPrep] = useState([]);
  const [lunch, setLunch] = useState(null);

  // Temp state for prep input before submission
  const [tempPrep, setTempPrep] = useState([]);

  // Single state to control which input is currently visible
  const [showInput, setShowInput] = useState(null);

  // Handlers for each field

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setType(value);

    // If the type is not 'staff', clear and reset the prep input
    if (value !== "staff") {
      setPrep([]);
      setTempPrep([]);
    }

    // Hide the current input after selection
    setShowInput(null);
  };

  const handlePrepChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setTempPrep((prevPrep) =>
      prevPrep.includes(value)
        ? prevPrep.filter((item) => item !== value)
        : [...prevPrep, value]
    );
  };

  const handlePrepSubmit = () => {
    setPrep(tempPrep); // Save temp prep values to the main state
    setShowInput(null); // Hide the current input after submission
  };

  const handleLunchChange = (e) => {
    setLunch(e.target.value);
    setShowInput(null); // Hide the current input after selection
  };

  return (
    <div className={styles.formWrapper}>
      {/* Status Indicators */}
      <div className={styles.statusWrapper}>
        <div
          onClick={() => setShowInput('type')}
          className={`${styles.statusIndicator} ${styles.typeStatus} ${showInput === 'type' ? styles.active : ""} ${type ? "" : styles.empty}`}
        >
          {type ? type : "Staff or Student"}
        </div>

        {type === "staff" && (
          <div
            onClick={() => setShowInput('prep')}
            className={`${styles.statusIndicator} ${styles.prepStatus} ${showInput === 'prep' ? styles.active : ""} ${prep.length > 0 ? "" : styles.empty}`}
          >
            {prep.length > 0 ? `Prep: ${prep.join(", ")}` : "Set Prep"}
          </div>
        )}

        <div
          onClick={() => setShowInput('lunch')}
          className={`${styles.statusIndicator} ${styles.lunchStatus} ${showInput === 'lunch' ? styles.active : ""} ${lunch ? "" : styles.empty}`}
        >
          {lunch ? `Lunch: ${lunch}` : "Select Lunch"}
        </div>
      </div>

      {/* Conditional Rendering of Fields */}

      {showInput === 'type' && (
        <div className={`${styles.inputGroup} ${styles.typeInputGroup}`}>
          <label
            htmlFor="type"
            className={`${styles.sharedLabel} ${styles.typeLabel}`}
          >
            Type (Staff or Students):
          </label>
          <select
            id="type"
            name="type"
            value={type || ""}
            onChange={handleTypeChange}
            required
            className={`${styles.sharedInput} ${styles.typeInput}`}
          >
            <option value="">Select Type</option>
            <option value="staff">Staff</option>
            <option value="students">Students</option>
          </select>
        </div>
      )}

      {showInput === 'prep' && (
        <div className={`${styles.inputGroup} ${styles.prepInputGroup}`}>
          <label className={`${styles.sharedLabel} ${styles.prepLabel}`}>
            Prep (Select multiple):
          </label>
          <div className={styles.prepOptions}>
            {[1, 2, 3].map((prepNumber) => (
              <label key={prepNumber} className={styles.prepOptionLabel}>
                <input
                  type="checkbox"
                  name="prep"
                  value={prepNumber}
                  checked={tempPrep.includes(prepNumber)} // Temp state handling
                  onChange={handlePrepChange}
                  className={`${styles.sharedInput} ${styles.prepCheckbox}`}
                />
                Prep {prepNumber}
              </label>
            ))}
          </div>
          <button
            type="button"
            onClick={handlePrepSubmit}
            className={styles.prepSubmitButton}
          >
            Submit Prep Selection
          </button>
        </div>
      )}

      {showInput === 'lunch' && (
        <div className={`${styles.inputGroup} ${styles.lunchInputGroup}`}>
          <label
            htmlFor="lunch"
            className={`${styles.sharedLabel} ${styles.lunchLabel}`}
          >
            Lunch (1, 2, or 3):
          </label>
          <select
            id="lunch"
            name="lunch"
            value={lunch || ""}
            onChange={handleLunchChange}
            required
            className={`${styles.sharedInput} ${styles.lunchInput}`}
          >
            <option value="">Select Lunch</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Form;
