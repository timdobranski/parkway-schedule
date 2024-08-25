'use client'

import styles from './TodosInput.module.css';
import { useState, useEffect } from 'react';

export default function TodosInput({ day, event, setTodosFormOpen }) {
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('dayOnly');
  const [todos, setTodos] = useState([]);

  const addTodoToLocalstorage = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({
      day,
      event,
      description,
      frequency,
      id: Date.now()
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    setTodosFormOpen(false);
  }

  useEffect(() => {
    console.log('event changed: ', event, typeof event);
  }, [event]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos)); // Parse the stored JSON string and set it as the todos state
    }
  }, []);


  return (
    <div className={styles.modalWrapper} onClick={() => setTodosFormOpen(false)}>
    <div className={styles.contentWrapper} onClick={e => e.stopPropagation()}>
      <h1 className={styles.modalTitle}>ADD A TO-DO FOR THIS BLOCK:</h1>

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

      {/* Frequency Select */}
      <div className={styles.formSection}>
        <label htmlFor="frequency" className={styles.inputLabel}>Frequency:</label>
        <select id="frequency" name="frequency" className={styles.frequencySelect} value={frequency} onChange={e => setFrequency(e.target.value)}>
          <option value="dayOnly">{`${event} ${day}s only`}</option>
          <option value={`every`}>
            Every {event}
          </option>
        </select>
      </div>
      <button className={styles.submitButton} onClick={addTodoToLocalstorage}>ADD TO-DO</button>
    </div>
    </div>
  );
}