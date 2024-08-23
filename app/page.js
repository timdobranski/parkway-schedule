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

  const [scheduleType, setScheduleType] = useState('yourSchedule'); // yourSchedule or fullSchedule


  useEffect(() => {
    console.log("prep changed on page: ", prep);
  }, [prep]);


  // Load initial values from localStorage when the component mounts
  useEffect(() => {
    const storedType = localStorage.getItem('type');
    const storedPrep = localStorage.getItem('prep');
    const storedLunch = localStorage.getItem('lunch');

    if (storedType) setType(storedType);
    if (storedPrep) setPrep(JSON.parse(storedPrep)); // localStorage stores arrays as strings
    if (storedLunch) setLunch(storedLunch);
  }, []);

  // Save `type` to localStorage whenever it changes
  useEffect(() => {
    if (type !== null) {
      localStorage.setItem('type', type);
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
        {type && lunch &&
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
