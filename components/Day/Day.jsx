'use client';

import styles from './Day.module.css'
import { useState, useEffect } from 'react'
import SplitSchedule from '../SplitSchedule/SplitSchedule'

export default function Day({ dayInfo, type, prep, lunch, scheduleType, setScheduleType }) {

  useEffect(() => {
    console.log('dayInfo changed: ', dayInfo);
  }, [dayInfo]);

  const handleScheduleTypeChange = (type) => {
    setScheduleType(type);
  };

  return (
    <div className="dayWrapper">
      <h3 className={styles.dayHeader}>{dayInfo.day.toUpperCase()}</h3>

      <div className={styles.selectScheduleTypeWrapper}>
        <div
          className={`${styles.scheduleOption} ${styles.yourScheduleOption} ${scheduleType === 'yourSchedule' ? styles.activeOption : ''}`}
          onClick={() => {
            if (lunch) {
              handleScheduleTypeChange('yourSchedule');
            } else {
              if (type === 'Staff') {
                alert('To view your personal schedule, please select your lunch and prep periods');
              } else if (type === 'Student') {
                alert('To view your personal schedule, please select your lunch period.');
              }
            }
          }}
        >
          YOUR SCHEDULE
        </div>
        <div
          className={`${styles.scheduleOption} ${styles.fullScheduleOption} ${scheduleType === 'fullSchedule' ? styles.activeOption : ''}`}
          onClick={() => handleScheduleTypeChange('fullSchedule')}
        >
          FULL SCHEDULE
        </div>
      </div>

      <div className={styles.dailyScheduleWrapper}>
        {dayInfo?.schedule?.flatMap((event, index) => {
          // Check if event type is 'split' and if scheduleType is 'fullSchedule'
          if (event.type === 'split' && scheduleType === 'fullSchedule') {
            // Render all the split schedule options for fullSchedule

            return ( <SplitSchedule splitSchedules={event.splitSchedules} lunch={lunch} preps={prep} /> );
          }

          // Handle regular events or individual split schedules for 'yourSchedule'
          if (event.type === 'split' && scheduleType === 'yourSchedule' && lunch) {
            const splitSchedule = event.splitSchedules[lunch];
            return splitSchedule.map((splitEvent, splitIndex) => (
              <div
                key={`${index}-${splitIndex}`}
                className={`
                  ${styles.eventWrapper}
                  ${splitEvent.type === 'class' ? styles.classEvent :
                    splitEvent.type === 'lunch' ? styles.lunchEvent :
                    splitEvent.type === 'win' ? styles.winEvent :
                    splitEvent.type === 'passing' ? styles.passingEvent : ''}
                `}
              >
                <div className={styles.timeAndDurationWrapper}>
                  {splitEvent.type !== 'passing' && (
                    <p className={`${styles.startTime} ${styles.timeAndDuration}`}>
                      {`${splitEvent.startTime}-${splitEvent.endTime}`}
                    </p>
                  )}
                  <p className={`${styles.duration} ${styles.timeAndDuration}`}>
                    {`${splitEvent.duration || 0} mins`}
                  </p>
                </div>
                <div className={styles.eventContentWrapper}>
                  <p className={styles.eventTitle}>
                    {splitEvent.title}
                    {prep.includes(Number(splitEvent.period)) && <span className={styles.prepPeriod}>{`PREP`}</span>}
                  </p>
                </div>
              </div>
            ));
          }

          // Handle regular events that are not of type 'split'
          return (
            <div
              key={index}
              className={`
                ${styles.eventWrapper}
                ${event.type === 'class' ? styles.classEvent :
                  event.type === 'lunch' ? styles.lunchEvent :
                  event.type === 'win' ? styles.winEvent :
                  event.type === 'passing' ? styles.passingEvent : ''}
              `}
            >
              <div className={styles.timeAndDurationWrapper}>
                {event.type !== 'passing' && (
                  <p className={`${styles.startTime} ${styles.timeAndDuration}`}>
                      {`${event.startTime}-${event.endTime}`}
                      </p>
                )}
                <p className={`${event.type === 'passing' ? styles.passingDuration : styles.duration} ${styles.timeAndDuration}`}>
                  {`${event.duration || 0} mins`}
                </p>
              </div>
              <div className={styles.eventContentWrapper}>
                <p className={styles.eventTitle}>
                  {event.title}
                  {prep.includes(Number(event.period)) && <span className={styles.prepPeriod}>{`PREP`}</span>}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
