'use client'

import { useState, useEffect, useRef } from "react";
import styles from "./Form.module.css"; // Assuming you have a CSS module

const Form = ({ type, setType, prep, setPrep, lunch, setLunch }) => {
  // Separate states for each field


  // Temp state for prep input before submission
  const [tempPrep, setTempPrep] = useState([]);

  // Single state to control which input is currently visible
  const [showInput, setShowInput] = useState(null);

  // Reference to track inputGroup element
  const inputGroupRef = useRef(null);

  // Handle click outside the input group
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputGroupRef.current &&
        !inputGroupRef.current.contains(event.target)
      ) {
        setShowInput(null); // Close the input if clicked outside
      }
    };

    // Add event listener when any input is shown
    if (showInput) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup event listener on unmount or when showInput changes
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInput]);

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
          className={`${styles.statusIndicator} ${styles.typeStatus} ${showInput === 'type' ? styles.active : ""} ${(type && showInput !== 'type') ? "" : styles.empty}`}
        >
          {type ? type : "Start Here"}
        </div>

        {type === "Staff" && (
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
{lunch ?
          `${lunch === '7/8th Grade Lunch 1' ? '7/8th L1'
          : lunch === '7/8th Grade Lunch 2' ? '7/8th L2'
          : lunch === '6th Grade Lunch' ? '6th'
          : lunch}`
  : "Set Lunch"}        </div>
      </div>

      {/* Conditional Rendering of Fields */}
      <div ref={inputGroupRef}>
      {showInput === 'type' && (
        <div className={styles.modal} onClick={(e) => {setShowInput(null)}}>
        <div className={`${styles.inputGroup} ${styles.typeInputGroup}`}  onClick={(e) => e.stopPropagation()}>
          <label
            htmlFor="type"
            className={`${styles.sharedLabel} ${styles.typeLabel}`}
          >
            SCHEDULE TYPE
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
            <option value="Staff">Staff</option>
            <option value="Student">Student</option>
          </select>
        </div>
        </div>
      )}

      {showInput === 'prep' && (
                <div className={styles.modal} onClick={() => setShowInput(null)}>

        <div className={`${styles.inputGroup} ${styles.prepInputGroup}`}  onClick={(e) => e.stopPropagation()}>
          <label className={`${styles.sharedLabel} ${styles.prepLabel}`}>
            SET YOUR PREP PERIODS
          </label>
          <div className={styles.prepOptions}>
            {[1, 2, 3, 4, 5, 6, 7].map((prepNumber) => (
              <label key={prepNumber} className={styles.prepOptionLabel}>
                <input
                  type="checkbox"
                  name="prep"
                  value={prepNumber}
                  checked={tempPrep.includes(prepNumber)} // Temp state handling
                  onChange={handlePrepChange}
                  className={`${styles.sharedInput} ${styles.prepCheckbox}`}
                />
                P{prepNumber}
              </label>
            ))}
          </div>
          <button
            type="button"
            onClick={handlePrepSubmit}
            className={styles.prepSubmitButton}
          >
            DONE
          </button>
        </div>
        </div>
      )}

      {showInput === 'lunch' && (
                <div className={styles.modal} onClick={(e) => {setShowInput(null)}}>

        <div className={`${styles.inputGroup} ${styles.lunchInputGroup}`}  onClick={(e) => e.stopPropagation()}>
          <label
            htmlFor="lunch"
            className={`${styles.sharedLabel} ${styles.lunchLabel}`}
          >
            SET YOUR LUNCH
          </label>
          <select
            id="lunch"
            name="lunch"
            value={lunch || ""}
            onChange={handleLunchChange}
            required
            className={`${styles.sharedInput} ${styles.lunchInput}`}
          >
            <option value="">Select an option</option>
            <option value={`6th Grade`}>{`6th Grade`}</option>
            <option value={`7/8th Grade Lunch 1`}>{`7/8th Grade Lunch 1`}</option>
            <option value={`7/8th Grade Lunch 2`}>{`7/8th Grade Lunch 2`}</option>
          </select>
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Form;
