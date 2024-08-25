'use client'

import styles from './TodosInput.module.css';
import { useState, useEffect } from 'react';

export default function TodosInput({ todos, day, event, setTodosFormOpen, setTodos, todoEditId, setTodoEditId }) {
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('dayOnly');

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

  return (
    <div className={styles.modalWrapper} onClick={closeForm}>
      <div className={styles.contentWrapper} onClick={e => e.stopPropagation()}>
        <h1 className={styles.modalTitle}>
          {todoEditId ? 'EDIT TO-DO' : 'ADD A TO-DO'} FOR THIS BLOCK:
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

        {/* Frequency Select */}
        <div className={styles.formSection}>
          <label htmlFor="frequency" className={styles.inputLabel}>Frequency:</label>
          <select
            id="frequency"
            name="frequency"
            className={styles.frequencySelect}
            value={frequency}
            onChange={e => setFrequency(e.target.value)}
          >
            <option value="dayOnly">{`${event} ${day}s only`}</option>
            <option value="every">{event} every day</option>
          </select>
        </div>

        <button className={styles.submitButton} onClick={handleSubmit}>
          {todoEditId ? 'UPDATE TO-DO' : 'ADD TO-DO'}
        </button>
      </div>
    </div>
  );
}