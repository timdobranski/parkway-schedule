'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Form from "../components/Form/Form";
import Schedule from "../components/Schedule/Schedule";
import { useState, useEffect } from "react";
import TodosInput from "../components/TodosInput/TodosInput";

export default function Home() {
  const [type, setType] = useState(null);
  const [prep, setPrep] = useState([]);
  const [lunch, setLunch] = useState(null);

  const [todosFormOpen, setTodosFormOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');

  const [todos, setTodos] = useState([]);
  const [scheduleType, setScheduleType] = useState('fullSchedule');

  // Using useEffect to check if we're in the client before accessing localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }

      const savedScheduleType = localStorage.getItem('scheduleType');
      if (savedScheduleType) {
        setScheduleType(savedScheduleType);
      }
    }
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('scheduleType', scheduleType);
    }
  }, [scheduleType]);


  // Load initial values from localStorage when the component mounts
  useEffect(() => {
    const storedType = localStorage.getItem('type');
    const storedPrep = localStorage.getItem('prep');
    const storedLunch = localStorage.getItem('lunch');
    const storedScheduleType = localStorage.getItem('scheduleType');

    if (storedType) setType(storedType);
    if (storedPrep) setPrep(JSON.parse(storedPrep)); // localStorage stores arrays as strings
    if (storedLunch) setLunch(storedLunch);
    if (storedScheduleType) setScheduleType(storedScheduleType);
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
  }, [lunch]);

  useEffect(() => {
    if (scheduleType !== null) {
      localStorage.setItem('scheduleType', scheduleType);
    }
  }, [scheduleType]);


  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos)); // Save todos when they are not empty
    } else {
      localStorage.removeItem('todos'); // Remove from localStorage if todos are empty
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
          />
        }
        {todosFormOpen && (
          <TodosInput
            todos={todos}
            setTodos={setTodos}
            day={selectedDay}
            event={selectedEvent}
            closeForm={() => setTodosFormOpen(false)}
            setTodosFormOpen={setTodosFormOpen}
          />
        )}
          </>
    // </div>
  );
}
