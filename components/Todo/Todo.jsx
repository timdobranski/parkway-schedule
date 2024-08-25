'use client'

import styles from './Todo.module.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

export default function Todo({ todoData, setTodos }) {

  const deleteTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoData.id);
    });
  }

  return(
    <div className={styles.todoItem}>
      <div className={styles.description}>{todoData.description}</div>
      {/* <div className={styles.frequency}>{todoData.frequency}</div> */}
      <div className={styles.todoActions}>
        <FontAwesomeIcon icon={faPencil} className={styles.actionIcon}/>
        <FontAwesomeIcon icon={faTrash} className={`${styles.actionIcon} ${styles.trashIcon}`} onClick={deleteTodo}/>
      </div>
    </div>
  )
}