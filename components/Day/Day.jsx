'use client';

import styles from './Day.module.css'

export default function Day({ dayInfo }) {

  return (
    <div className='dayWrapper'>
      <h3>{dayInfo.day}</h3>
      <div className={styles.dailyScheduleWrapper}>
      {dayInfo?.schedule?.map((event, index) => {
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
            {event.type !== 'passing' && <p className={`${styles.startTime} ${styles.timeAndDuration}`}>{event.startTime}</p>}
            <p className={`${styles.duration} ${styles.timeAndDuration}`}>{`${event.duration || 0} mins`}</p>
            </div>
            <div className={styles.eventContentWrapper}>
              <p className={styles.eventTitle}>{event.period}</p>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )

}