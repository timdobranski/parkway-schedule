'use client'

import styles from './TodosInput.module.css';
import { useState, useEffect } from 'react';
import dayHasEvent from '../../utils/dayHasEvent';

export default function TodosInput({ todos, day, event, setTodosFormOpen, setTodos, todoEditId, setTodoEditId, scheduleData }) {
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState([]);

  useEffect(() => {
    if (todoEditId) {
      const todoToEdit = todos.find(todo => todo.id === todoEditId);
      if (todoToEdit) {
        setDescription(todoToEdit.description);
        setFrequency(todoToEdit.frequency);
      }
    }
  }, [todoEditId, todos]);

  const handleSubmit = () => {
    if (todoEditId) {
      // Edit existing todo
      setTodos((prevTodos) =>
        prevTodos.map(todo =>
          todo.id === todoEditId
            ? { ...todo, description, frequency }
            : todo
        )
      );
    } else {
      // Add new todo
      setTodos((prev) => {
        return [...prev, { day, event, description, frequency, id: Date.now() }];
      });
    }
    setTodosFormOpen(false);
    setTodoEditId(null);
  }

  const closeForm = () => {
    setTodosFormOpen(false);
    setTodoEditId(null);
  }

  const handleDayChange = (day) => {
    setFrequency((prevFrequency) =>
      prevFrequency.includes(day)
        ? prevFrequency.filter(d => d !== day) // Uncheck: remove from frequency
        : [...prevFrequency, day] // Check: add to frequency
    );
  };

  useEffect(() => {
    console.log('event changed in TodosInput component: ', event);
  }, [event])

  return (
    <div className={styles.modalWrapper} onClick={closeForm}>
      <div className={styles.contentWrapper} onClick={e => e.stopPropagation()}>
        <h1 className={styles.modalTitle}>
          {todoEditId ? 'EDIT TO-DO' : 'ADD A TO-DO'} FOR {event.toUpperCase()}:
        </h1>

        <div className={styles.formSection}>
          <label htmlFor="description" className={styles.inputLabel}>Description:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
            className={styles.descriptionInput}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

          {/* Frequency Checkboxes */}
          <div className={styles.formSection}>
          <label htmlFor="frequency" className={styles.frequencyInputLabel}>{`SELECT DAYS`}</label>
          <div className={styles.checkboxGroup}>
            {scheduleData.map((dayInfo, index) => {
              if (dayHasEvent(dayInfo.day, event)) return (

                <label key={index} className={`${styles.checkboxLabel} ${dayInfo.specialDay ? styles.specialDay : ''}`}>
                <input
                  type="checkbox"
                  value={dayInfo.day}
                  checked={frequency.includes(dayInfo.day)}
                  onChange={() => handleDayChange(dayInfo.day)}
                  />
                {dayInfo.day}
              </label>
                )
})}
          </div>
        </div>

        <button className={styles.submitButton} onClick={handleSubmit}>
          {todoEditId ? 'UPDATE TO-DO' : 'ADD TO-DO'}
        </button>
        <button className={styles.backButton} onClick={closeForm}>
          BACK
        </button>
      </div>
    </div>
  );
}