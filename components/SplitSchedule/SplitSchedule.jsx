'use client';

import styles from './SplitSchedule.module.css';

export default function SplitSchedule({ splitSchedules, lunch, preps }) {
  return (
    <div className={styles.splitWrapper}>
      {splitSchedules && Object.entries(splitSchedules).map(([key, splitSchedule], splitIndex) => (
        <div key={key} className={styles.scheduleColumn}>
          {splitSchedule.map((splitEvent, nestedIndex) => {
            // Log values to debug
            console.log(`splitEvent.period: ${splitEvent.period}`);
            console.log(`preps:`, preps);
            console.log(`lunch: ${lunch}`);
            console.log(`splitKey: ${key}`);
            console.log(`Condition met: ${preps.includes(Number(splitEvent.period)) && lunch === key}`);

            return (
              <div
                key={`${splitIndex}-${nestedIndex}`}
                className={`
                  ${styles.eventWrapper}
                  ${splitEvent.type === 'class' ? styles.classEvent :
                    splitEvent.type === 'lunch' ? styles.lunchEvent :
                    splitEvent.type === 'win' ? styles.winEvent :
                    splitEvent.type === 'passing' ? styles.passingEvent : ''}
                `}
              >
                {/* Render prep span only if preps includes the event's period and lunch matches the current key */}
                {preps.includes(Number(splitEvent.period)) && lunch === key && (
                  <span className={styles.prepPeriod}>{`PREP`}</span>
                )}

                <div className={styles.eventContentWrapper}>
                  <p className={styles.eventTitle}>
                    {splitEvent.type === 'passing' ? '' : splitEvent.title}
                  </p>

                  <div className={styles.timeAndDurationWrapper}>
                    {splitEvent.type !== 'passing' && (
                      <p className={`${styles.startTime} ${styles.timeAndDuration}`}>
                        {`${splitEvent.startTime}-${splitEvent.endTime}`}
                      </p>
                    )}
                    {splitEvent.type !== 'passing' && (
                      <p className={`${styles.duration} ${styles.timeAndDuration}`}>
                        {`${splitEvent.duration || 0} mins`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}


