'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Form from "../components/Form/Form";
import Schedule from "../components/Schedule/Schedule";
import { useState, useEffect } from "react";

export default function Home() {
  const [type, setType] = useState(null);
  const [prep, setPrep] = useState([]);
  const [lunch, setLunch] = useState(null);

  const [scheduleType, setScheduleType] = useState('fullSchedule'); // yourSchedule or fullSchedule


  useEffect(() => {
    console.log("prep changed on page: ", prep);
  }, [prep]);


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
    if (type === 'Staff' && scheduleType === 'yourSchedule' && (prep.length === 0 || lunch === null)) {
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
          />
        }
          </>
    // </div>
  );
}
