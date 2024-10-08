'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Form from "../components/Form/Form";
import Schedule from "../components/Schedule/Schedule";
import { useState, useEffect } from "react";
import TodosInput from "../components/TodosInput/TodosInput";
import scheduleData from "../public/scheduleData";

export default function Home() {
  const [type, setType] = useState(null);
  const [prep, setPrep] = useState([]);
  const [lunch, setLunch] = useState(null);

  const [todosFormOpen, setTodosFormOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [todoEditId, setTodoEditId] = useState(null);

  const [todos, setTodos] = useState([]);
  const [scheduleType, setScheduleType] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedScheduleType = localStorage.getItem('scheduleType');
      if (savedScheduleType) {
        setScheduleType(savedScheduleType);
      } else {
        setScheduleType('fullSchedule');
      }
    }
  }, []);

  // Save scheduleType to localStorage when it changes
  useEffect(() => {
    if (scheduleType !== null && typeof window !== 'undefined') {
      localStorage.setItem('scheduleType', scheduleType);
    }
  }, [scheduleType]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    }
  }, []);

  // Load initial values from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedType = localStorage.getItem('type');
      const storedPrep = localStorage.getItem('prep');
      const storedLunch = localStorage.getItem('lunch');

      if (storedType) setType(storedType);
      if (storedPrep) setPrep(JSON.parse(storedPrep));
      if (storedLunch) setLunch(storedLunch);
    }
  }, []);

  // Save `type` to localStorage whenever it changes
  useEffect(() => {
    if (type !== null) {
      localStorage.setItem('type', type);
    }
    if (type === 'Staff' && scheduleType === 'yourSchedule' && lunch === null) {
      setScheduleType('fullSchedule');
    }
  }, [type]);

  // Save `prep` to localStorage whenever it changes
  useEffect(() => {
    if (prep.length > 0) {
      localStorage.setItem('prep', JSON.stringify(prep)); // Save as string
    }
  }, [prep]);

  // Save `lunch` to localStorage whenever it changes
  useEffect(() => {
    if (lunch !== null) {
      localStorage.setItem('lunch', lunch);
    }
    console.log('lunch changed', lunch);
    if (!lunch && scheduleType === 'yourSchedule') {
      console.log('condition met to set schedule to full');
      setScheduleType('fullSchedule');
    }
  }, [lunch]);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      localStorage.removeItem('todos');
    }
  }, [todos]);

  return (
    // <div className='app'>
    <>
        <Form
          type={type}
          setType={setType}
          prep={prep}
          setPrep={setPrep}
          lunch={lunch}
          setLunch={setLunch}
          />
        {type &&
        <Schedule
          type={type}
          prep={prep}
          lunch={lunch}
          scheduleType={scheduleType}
          setScheduleType={setScheduleType}
          todos={todos}
          setTodos={setTodos}
          todoFormOpen={todosFormOpen}
          setTodosFormOpen={setTodosFormOpen}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          setTodoEditId={setTodoEditId}
          />
        }
        {todosFormOpen && (
          <TodosInput
            todos={todos}
            setTodos={setTodos}
            day={selectedDay}
            event={selectedEvent}
            todoEditId={todoEditId}
            setTodoEditId={setTodoEditId}
            setTodosFormOpen={setTodosFormOpen}
            scheduleData={scheduleData}
          />
        )}
          </>
    // </div>
  );
}
